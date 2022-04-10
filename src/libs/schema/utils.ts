import { z, ZodOptional, type ZodNumber, type ZodTypeAny } from 'zod';

export type ZodOptionalable<TZodType extends ZodTypeAny> = TZodType | ZodOptional<TZodType>;
export type RemoveZodOptional<TZodType extends ZodTypeAny> = TZodType extends ZodOptional<infer Z> ? Z : TZodType;

export const direction = z.enum(['asc', 'desc']).default('asc');
export const booleanRadio = z.enum(['none', 'true', 'false']).default('none');
export const regexString = (regExp: RegExp, message: string) => z.string().regex(regExp, { message });
export const intRange = (min: number, max: number) =>
  z
    .number()
    .min(min, { message: `${min}以上で入力してください。` })
    .max(max, { message: `${max}以下で入力してください。` })
    .int({ message: '整数で入力してください。' });

export const getNumberRange = (schema: ZodOptionalable<ZodNumber>) => {
  const number = schema instanceof ZodOptional ? schema.unwrap() : schema;

  return { min: number.minValue ?? undefined, max: number.maxValue ?? undefined };
};
