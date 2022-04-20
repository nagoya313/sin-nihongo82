import type { ZodIssueOptionalMessage } from 'zod';
import { z } from 'zod';
import type { ZodContext } from './types';

export const fallbackMessage = (issue: ZodIssueOptionalMessage, ctx: ZodContext) =>
  z.defaultErrorMap(issue, ctx).message;
