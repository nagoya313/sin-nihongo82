import type { ZodTooSmallIssue } from 'zod';
import { fallbackMessage } from './fallbackMessage';
import type { ZodContext } from './types';

export const tooSmall = (issue: ZodTooSmallIssue, ctx: ZodContext) => {
  if (issue.type === 'string') {
    if (issue.minimum === 1) return '必須項目です。';
    return `${issue.minimum}字以上で入力してください。`;
  }
  if (issue.type === 'number') {
    return issue.inclusive ? `${issue.minimum}以上で入力してください。` : `${issue.minimum}超過で入力してください。`;
  }
  return fallbackMessage(issue, ctx);
};
