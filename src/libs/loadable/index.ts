import { LoadableState, type LoadableCache, type LoadableQueryKey } from './types';

const cache: LoadableCache = {};

export class Loadable<TQueryKey extends LoadableQueryKey, TData> {
  constructor(queryKey: TQueryKey, loadFn: () => Promise<TData>) {
    this.#key = JSON.stringify(queryKey);
    this.#loadFn = loadFn;
    this.#getOrSetCache();
  }

  get value() {
    const state = this.#getOrSetCache();

    switch (state?.status) {
      case 'pending':
        throw state.promise;
      case 'succeeded':
        this.#extendCache();
        return state.data;
      case 'rejected':
        this.#extendCache();
        throw state.error;
    }
  }

  get isError() {
    const { status } = this.#getOrSetCache();
    return status === 'rejected';
  }

  get #cacheValue() {
    return cache[this.#key] as LoadableState<TData> | undefined;
  }

  #getOrSetCache() {
    const state = this.#cacheValue;

    if (state == null) {
      return (cache[this.#key] = {
        status: 'pending',
        promise: this.#loadFn().then(this.#succeeded).catch(this.#rejected),
      } as const);
    }

    return state;
  }

  #succeeded = (data: TData) => {
    cache[this.#key] = { status: 'succeeded', data, reserveDeleteId: this.#reserveDeleteCache() };
    return data;
  };

  #rejected = (error: unknown) => {
    cache[this.#key] = { status: 'rejected', error, reserveDeleteId: this.#reserveDeleteCache() };
    throw error;
  };

  #reserveDeleteCache = () =>
    setTimeout(() => {
      delete cache[this.#key];
    }, 10 * 1000);

  #extendCache = () => {
    const state = cache[this.#key] ?? this.#getOrSetCache();

    switch (state?.status) {
      case 'succeeded':
      case 'rejected': {
        clearTimeout(state.reserveDeleteId);
        state.reserveDeleteId = this.#reserveDeleteCache();
      }
    }
  };

  readonly #key: string;
  readonly #loadFn: () => Promise<TData>;
}
