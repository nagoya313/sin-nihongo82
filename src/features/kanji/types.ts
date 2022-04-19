import { z } from 'zod';
import { type Timestamp } from '../../db/timestamp';
import { type radicalKanjiQueryParams } from './queryParams';

export type Kanji = {
  readonly code_point: number;
  readonly regular: boolean;
  readonly for_name: boolean;
  readonly stroke_count: number;
  readonly in_radical_stroke_count: number;
  readonly radical_code_point: number;
  readonly jis_level: 1 | 2;
  readonly glyph_id: number | null;
} & Timestamp;

export type KanjiRead = {
  readonly read: string;
  readonly kanji_code_point: number;
} & Timestamp;

export type RadicalKanjiQueryParams = z.infer<typeof radicalKanjiQueryParams>;
