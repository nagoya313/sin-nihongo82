import { type Kanji, type KanjiRead } from '../features/kanji/types';
import { type Radical, type RadicalRead } from '../features/radical/types';

export type Database = {
  radical: Radical;
  radical_read: RadicalRead;
  kanji: Kanji;
  kanji_read: KanjiRead;
};
