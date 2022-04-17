import isEmpty from 'lodash/isEmpty';
import { LoadableCache, LoadableLoaders, LoadableParams, LoadableState } from './types';

export abstract class Loadable<TData> {
  abstract get value(): TData;
  abstract get isError(): boolean;
}

export const makeLoadable = <TLoadableLoaders extends LoadableLoaders>(loaders: TLoadableLoaders) => {
  class LoadableImpl<TQueryKey extends keyof TLoadableLoaders> extends Loadable<
    Awaited<ReturnType<TLoadableLoaders[TQueryKey]>>
  > {
    constructor(...args: LoadableParams<TLoadableLoaders, TQueryKey>) {
      super();
      this.#key = args[0];
      this.#params = JSON.stringify(args[1]);
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
          throw state.error;
      }
    }

    get isError() {
      const { status } = this.#getOrSetCache();
      return status === 'rejected';
    }

    get #cacheValue() {
      return LoadableImpl.#cache[this.#key]?.[this.#params];
    }

    #getOrSetCache() {
      const state = this.#cacheValue;

      if (state == null) {
        this.#chacheWrite({
          status: 'pending',
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          promise: LoadableImpl.#loaders[this.#key]!(this.#params).then(this.#succeeded).catch(this.#rejected),
        });

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.#cacheValue!;
      }

      return state;
    }

    #succeeded = (data: Awaited<ReturnType<TLoadableLoaders[TQueryKey]>>) => {
      this.#chacheWrite({ status: 'succeeded', data, reserveDeleteId: this.#reserveDeleteCache() });
      return data;
    };

    #rejected = (error: unknown) => {
      this.#chacheWrite({ status: 'rejected', error, reserveDeleteId: this.#reserveDeleteCache() });
      throw error;
    };

    #chacheWrite = (state: LoadableState<Awaited<ReturnType<TLoadableLoaders[TQueryKey]>>>) => {
      Object.assign(LoadableImpl.#cache, { [this.#key]: { [this.#params]: state } });
    };

    #chacheDelte = () => {
      delete LoadableImpl.#cache[this.#key]?.[this.#params];
      if (isEmpty(LoadableImpl.#cache[this.#key])) {
        delete LoadableImpl.#cache[this.#key];
      }
    };

    #reserveDeleteCache = () => setTimeout(this.#chacheDelte, 10 * 1000);

    #extendCache = () => {
      const state = LoadableImpl.#cache[this.#key] ?? this.#getOrSetCache();

      switch (state?.status) {
        case 'succeeded':
        case 'rejected': {
          clearTimeout(state.reserveDeleteId);
          state.reserveDeleteId = this.#reserveDeleteCache();
        }
      }
    };

    readonly #key: TQueryKey;
    readonly #params: string;
    static #cache: LoadableCache<TLoadableLoaders> = {};
    static #loaders = loaders;
  }

  return LoadableImpl;
};
