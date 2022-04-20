import { setErrorMap, z } from 'zod';
import { errorMap } from './errorMap';

describe('zod error localised message', () => {
  beforeEach(() => {
    setErrorMap((issue, ctx) => ({ message: errorMap(issue, ctx) }));
  });

  describe('invalid type', () => {
    test('undefinedには必須を出す', () => {
      expect(z.string()).toHaveInvalidMessage(undefined, '必須項目です。');
      expect(z.number()).toHaveInvalidMessage(undefined, '必須項目です。');
    });

    test('int指定での小數入力のエラーメッセジが正しい', () => {
      expect(z.number().int()).toHaveInvalidMessage(1.1, '整数で入力してください。');
    });
  });
});
