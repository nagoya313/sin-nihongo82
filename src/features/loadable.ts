import { makeLoadable, type Loadable as LoadbleType } from '../libs/loadable';
import { type LoadableData as LibLoadableData } from '../libs/loadable/types';
import { radicalStrokeCountOrder } from './radical/radicalStrokeCountOrder.server';

export const Loadable = makeLoadable({ radicalStrokeCountOrder });
type Loaders = typeof Loadable.loaders;
type LoaderKeys = keyof Loaders;
export type LoadableData<TKey extends LoaderKeys> = LibLoadableData<Loaders[TKey]>;
export type Loadable<TKey extends LoaderKeys> = LoadbleType<LoadableData<TKey>>;
