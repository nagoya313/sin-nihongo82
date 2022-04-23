import { z } from 'zod';
import { smallInt } from '~/libs/schema/postgres';
import { numberPreprocess } from '~/libs/schema/preprocess';

export const radicals = '/radicals';
export const radical = '/radicals/[id]';
export const radicalEdit = '/radicals/[id]/edit';

export const radicalPathParams = z.object({ id: numberPreprocess(smallInt) });
