import { z } from 'zod';
import { direction, intRange } from '../../libs/schema/utils';

const KANA_MATCHER = /^(?!.*[ぢづゐゑを])[\u3040-\u3093ー]+$/;

export const radicalQueryParams = z.object({
  sort: z.enum(['stroke_count', 'read']).default('stroke_count'),
  direction,
  strokeCount: intRange(1, 17).optional(),
  read: z
    .string()
    .regex(KANA_MATCHER, 'ひらがなで入力してください。')
    .max(10, '10文字以内で入力してください。')
    .optional(),
});
