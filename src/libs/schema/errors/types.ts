import { type defaultErrorMap } from 'zod';

export type ZodContext = Parameters<typeof defaultErrorMap>[1];
