import { type ZodOptional, type ZodTypeAny } from 'zod';

export type ZodOptionalable<TZodType extends ZodTypeAny> = TZodType | ZodOptional<TZodType>;
export type RemoveZodOptional<TZodType extends ZodTypeAny> = TZodType extends ZodOptional<infer Z> ? Z : TZodType;
