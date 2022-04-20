import z, { type ZodNumber } from 'zod';
import { type ZodOptionalable } from './types';

export const intRange = (min: number, max: number) => z.number().min(min).max(max).int();

export const getNumberRange = (schema: ZodOptionalable<ZodNumber>) => {
  const number = schema instanceof z.ZodOptional ? schema.unwrap() : schema;

  return { min: number.minValue ?? undefined, max: number.maxValue ?? undefined };
};
