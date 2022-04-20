import { z, type ZodTypeAny } from 'zod';

export const numberPreprocess = (schema: ZodTypeAny) => z.preprocess((value) => Number(value), schema);
