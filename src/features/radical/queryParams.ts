import { z } from 'zod';
import { direction } from '../../libs/schema/direction';
import { intRange } from '../../libs/schema/intRange';

const KANA_MATCHER = /^(?!.*[ぢづゐゑを])[\u3040-\u3093ー]+$/;

export const radicalQueryParams = z.object({
  direction,
  strokeCount: intRange(1, 17).optional(),
  read: z
    .string()
    .regex(KANA_MATCHER, 'ひらがなで入力してください。')
    .max(10, '10文字以内で入力してください。')
    .optional(),
});
