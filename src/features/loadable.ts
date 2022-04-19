import { makeLoadable, type Loadable as LoadbleType } from '../libs/loadable';
import { type LoadableData as LibLoadableData } from '../libs/loadable/types';
import { radicalKanjiReadOrder } from './kanji/radicalKanjiReadOrder.server';
import { radicalKanjiStrokeCountOrder } from './kanji/radicalKanjiStrokeCountOrder.server';
import { radicalReadOrder } from './radical/radicalReadOrder.server';
import { radicalStrokeCountOrder } from './radical/radicalStrokeCountOrder.server';

export const Loadable = makeLoadable({
  radicalStrokeCountOrder,
  radicalReadOrder,
  radicalKanjiStrokeCountOrder,
  radicalKanjiReadOrder,
});
type Loaders = typeof Loadable.loaders;
type LoaderKeys = keyof Loaders;
export type LoadableData<TKey extends LoaderKeys> = LibLoadableData<Loaders[TKey]>;
export type Loadable<TKey extends LoaderKeys> = LoadbleType<LoadableData<TKey>>;
