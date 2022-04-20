import { setErrorMap, z } from 'zod';
import { errorMap } from './errorMap';

describe('zod error localised message', () => {
  beforeEach(() => {
    setErrorMap((issue, ctx) => ({ message: errorMap(issue, ctx) }));
  });

  describe('too small', () => {
    describe('string', () => {
      test('1文字以上必要な場合の空文字には必須を出す', () => {
        expect(z.string().min(1)).toHaveInvalidMessage('', '必須項目です。');
      });

      test('2文字以上必要な場合の空文字には2文字以上を出す', () => {
        expect(z.string().min(2)).toHaveInvalidMessage('', '2字以上で入力してください。');
      });

      test('2文字以上必要な場合の1文字には2文字以上を出す', () => {
        expect(z.string().min(2)).toHaveInvalidMessage('a', '2字以上で入力してください。');
      });
    });

    describe('number', () => {
      test('minを指定した場合のエラーメッセジが正しい', () => {
        expect(z.number().min(1)).toHaveInvalidMessage(0, '1以上で入力してください。');
      });

      test('gteを指定した場合のエラーメッセジが正しい', () => {
        expect(z.number().gte(1)).toHaveInvalidMessage(0, '1以上で入力してください。');
      });

      test('gtを指定した場合のエラーメッセジが正しい', () => {
        expect(z.number().gt(1)).toHaveInvalidMessage(0, '1超過で入力してください。');
      });
    });
  });
});
