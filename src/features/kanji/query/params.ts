import { z } from 'zod';
import { booleanRadio } from '~/libs/schema/booleanRadio';
import { direction } from '~/libs/schema/direction';
import { intRange } from '~/libs/schema/intRange';

const KANA_MATCHER = /^(?!.*[ぢづゐゑをヂヅヰヱヲ])[\u3040-\u3093\u30a0-\u30ffー]+$/;

export const radicalKanjiQueryParams = z.object({
  direction,
  strokeCount: intRange(-1, 25).optional(),
  read: z.string().regex(KANA_MATCHER, 'ひらがなかカタカナで入力してください。').max(10).optional(),
  regular: booleanRadio,
});
