import { z } from 'zod';
import { direction } from '~/libs/schema/direction';
import { intRange } from '~/libs/schema/intRange';
import { hiragana } from '~/libs/schema/regex';

export const radicalQueryParams = z.object({
  direction,
  strokeCount: intRange(1, 17).optional(),
  read: hiragana.max(10).optional(),
});
