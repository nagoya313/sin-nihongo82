import { z } from 'zod';

export const smallInt = z.preprocess((value) => Number(value), z.number().int().min(-32768).max(32767));
