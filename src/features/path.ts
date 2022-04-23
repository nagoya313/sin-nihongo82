import { ValueOf } from 'type-fest';
import { home } from './home/path';
import { info } from './info/path';
import { kanji } from './kanji/path';
import { radical, radicalEdit, radicals } from './radical/path';

export const Path = {
  home,
  info,
  radicals,
  radical,
  radicalEdit,
  kanji,
} as const;

export type PathString = ValueOf<typeof Path>;
