import { setErrorMap, z } from 'zod';
import { errorMap } from './errorMap';

describe('zod error localised message', () => {
  beforeEach(() => {
    setErrorMap((issue, ctx) => ({ message: errorMap(issue, ctx) }));
  });

  describe('too big', () => {
    describe('string', () => {
      test('maxを指定した場合のエラーメッセジが正しい', () => {
        expect(z.string().max(1)).toHaveInvalidMessage('aa', '1字以内で入力してください。');
      });
    });

    describe('number', () => {
      test('maxを指定した場合のエラーメッセジが正しい', () => {
        expect(z.number().max(1)).toHaveInvalidMessage(2, '1以下で入力してください。');
      });

      test('lteを指定した場合のエラーメッセジが正しい', () => {
        expect(z.number().lte(1)).toHaveInvalidMessage(2, '1以下で入力してください。');
      });

      test('ltを指定した場合のエラーメッセジが正しい', () => {
        expect(z.number().lt(1)).toHaveInvalidMessage(2, '1未満で入力してください。');
      });
    });
  });
});
