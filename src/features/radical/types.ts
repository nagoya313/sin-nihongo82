import { type Timestamp } from '../../db/timestamp';

export type Radical = {
  readonly code_point: number;
  readonly stroke_count: number;
} & Timestamp;

export type RadicalRead = {
  readonly read: string;
  readonly radical_code_point: number;
} & Timestamp;
