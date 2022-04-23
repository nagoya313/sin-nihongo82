import { z, type ZodTypeAny } from 'zod';

export const numberPreprocess = <TSchema extends ZodTypeAny>(schema: TSchema) =>
  z.preprocess((value) => Number(value), schema);
