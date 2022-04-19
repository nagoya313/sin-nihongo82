import { z } from 'zod';
import { booleanRadio, direction, intRange } from '../../libs/schema/utils';

const KANA_MATCHER = /^(?!.*[ぢづゐゑをヂヅヰヱヲ])[\u3040-\u3093\u30a0-\u30ffー]+$/;

export const radicalKanjiQueryParams = z.object({
  sort: z.enum(['stroke_count', 'read']).default('stroke_count'),
  direction,
  strokeCount: intRange(-1, 25).optional(),
  read: z
    .string()
    .regex(KANA_MATCHER, 'ひらがなかカタカナで入力してください。')
    .max(10, '10文字以内で入力してください。')
    .optional(),
  regular: booleanRadio,
});
