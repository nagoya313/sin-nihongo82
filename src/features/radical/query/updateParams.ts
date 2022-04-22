import { z } from 'zod';
import { intRange } from '~/libs/schema/intRange';
import { smallInt } from '~/libs/schema/postgres';
import { hiragana } from '~/libs/schema/regex';

export const radicalUpdateParams = z.object({
  code_point: smallInt,
  stroke_count: intRange(1, 17),
  reads: z.array(hiragana.max(10)),
});
