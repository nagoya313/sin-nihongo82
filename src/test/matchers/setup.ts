import {
  toAcceptPropertyValue,
  toAcceptPropertyValues,
  toAcceptValue,
  toAcceptValues,
  toHaveInvalidMessage,
} from './zod';

expect.extend({ toAcceptValue, toAcceptValues, toAcceptPropertyValue, toAcceptPropertyValues, toHaveInvalidMessage });
