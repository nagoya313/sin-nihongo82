export type LoadablePending<T> = {
  status: 'pending';
  promise: Promise<T>;
};

export type LoadableSucceeded<T> = {
  status: 'succeeded';
  data: T;
  reserveDeleteId: NodeJS.Timeout;
};

export type LoadableRejected = {
  status: 'rejected';
  error: unknown;
  reserveDeleteId: NodeJS.Timeout;
};

export type LoadableState<T> = LoadablePending<T> | LoadableSucceeded<T> | LoadableRejected;
export type LoadableCache = Record<string, LoadableState<unknown>>;
export type LoadableQueryKey = string | readonly [string, string | number | Record<string, unknown>];
