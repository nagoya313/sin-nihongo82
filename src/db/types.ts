import { type Kanji, type KanjiRead } from '~/features/kanji/query/types';
import { type Radical, type RadicalRead } from '~/features/radical/query/types';

export type Database = {
  radical: Radical;
  radical_read: RadicalRead;
  kanji: Kanji;
  kanji_read: KanjiRead;
};
