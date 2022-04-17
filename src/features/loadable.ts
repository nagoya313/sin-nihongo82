import { makeLoadable, type Loadable as LoadbleType } from '../libs/loadable';
import { radicalStrokeCountOrder } from './radical/radicalStrokeCountOrder.server';

const loaders = { radicalStrokeCountOrder } as const;
type Loaders = typeof loaders;

export const Loadable = makeLoadable(loaders);
export type LoadableData<TKey extends keyof Loaders> = Awaited<ReturnType<Loaders[TKey]>>;
export type Loadable<TKey extends keyof Loaders> = LoadbleType<LoadableData<TKey>>;
