import type { ZodInvalidTypeIssue } from 'zod';
import { fallbackMessage } from './fallbackMessage';
import type { ZodContext } from './types';

export const invalidType = (issue: ZodInvalidTypeIssue, ctx: ZodContext) => {
  if (issue.received === 'undefined' || issue.received === 'null') return '必須項目です。';
  if (issue.expected === 'integer') return '整数で入力してください。';
  return fallbackMessage(issue, ctx);
};
