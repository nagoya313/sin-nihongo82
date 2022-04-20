import type { ZodTooBigIssue } from 'zod';
import { fallbackMessage } from './fallbackMessage';
import type { ZodContext } from './types';

export const tooBig = (issue: ZodTooBigIssue, ctx: ZodContext) => {
  if (issue.type === 'string') return `${issue.maximum}字以内で入力してください。`;
  if (issue.type === 'number') {
    return issue.inclusive ? `${issue.maximum}以下で入力してください。` : `${issue.maximum}未満で入力してください。`;
  }
  return fallbackMessage(issue, ctx);
};
