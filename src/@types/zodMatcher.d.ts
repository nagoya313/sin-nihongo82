import { ZodType } from 'zod';

type Schema<T extends z.infer> = T extends z.infer<infer S> ? S : never;

declare global {
  namespace jest {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<R, T extends ZodType> {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      toAcceptValue(value: unknown): R;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      toAcceptValues(values: ReadonlyArray<unknown>): R;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      toAcceptPropertyValue(property: string, value: unknown);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      toAcceptPropertyValues(property: string, values: ReadonlyArray<unknown>);
    }
  }
}
