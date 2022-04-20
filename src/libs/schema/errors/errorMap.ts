import type { ZodIssueOptionalMessage } from 'zod';
import { ZodIssueCode } from 'zod';
import { fallbackMessage } from './fallbackMessage';
import { invalidType } from './invalidType';
import { tooBig } from './tooBig';
import { tooSmall } from './tooSmall';
import type { ZodContext } from './types';

export const errorMap = (issue: ZodIssueOptionalMessage, ctx: ZodContext) => {
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      return invalidType(issue, ctx);
    case ZodIssueCode.too_small:
      return tooSmall(issue, ctx);
    case ZodIssueCode.too_big:
      return tooBig(issue, ctx);
    default:
  }
  return fallbackMessage(issue, ctx);
};
