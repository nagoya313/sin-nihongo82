// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type LoadableLoaders = Record<string, (params: any) => Promise<any>>;

export type LoadableCache<TLoadableLoaders extends LoadableLoaders> = {
  [key in keyof TLoadableLoaders]?: Record<string, LoadableState<Awaited<ReturnType<TLoadableLoaders[key]>>>>;
};

export type LoadableParams<
  TLoadableLoaders extends LoadableLoaders,
  TQueryKey extends keyof TLoadableLoaders
> = Parameters<TLoadableLoaders[TQueryKey]>[0] extends undefined
  ? [TQueryKey]
  : [TQueryKey, Parameters<TLoadableLoaders[TQueryKey]>[0]];

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
