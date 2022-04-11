import isEqual from 'lodash/isEqual';
import { ZodObject, ZodType } from 'zod';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toAcceptValue = (schema: ZodType, values: any) => {
  assert(schema instanceof ZodType, 'schema is not zod schema.');
  const pass = schema.safeParse(values).success;
  const stringifyValues = JSON.stringify(values);

  const message = pass
    ? () => `expected ${stringifyValues} is not valid values.`
    : () => `expected ${stringifyValues} is valid values.`;

  return { pass, message };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isPass = (schema: ZodType, property: string, value: any) => {
  const parsed = schema.safeParse({ [property]: value });
  return parsed.success || parsed.error.errors.every(({ path }) => !isEqual(path, [property]));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toAcceptPropertyValue = (schema: ZodType, property: string, value: any) => {
  assert(schema instanceof ZodObject, 'schema is not zod object schema.');
  const pass = isPass(schema, property, value);
  const stringifyValues = JSON.stringify(value);

  const message = pass
    ? () => `expected ${stringifyValues} is not valid property "${property}" value.`
    : () => `expected ${stringifyValues} is valid property "${property}" value.`;

  return { pass, message };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toAcceptPropertyValues = (schema: ZodType, property: string, values: ReadonlyArray<any>) => {
  assert(schema instanceof ZodObject, 'schema is not zod object schema.');
  const pass = values.every((value) => isPass(schema, property, value));
  const stringifyValues = JSON.stringify(values);

  const message = pass
    ? () => `expected ${stringifyValues} is not valid property "${property}" value.`
    : () => `expected ${stringifyValues} is valid property "${property}" value.`;

  return { pass, message };
};
