import { radicalQueryParams } from './queryParams';

describe('radicalQueryParams', () => {
  describe('default values', () => {
    const params = radicalQueryParams.parse({});

    it('direction equal asc', () => {
      expect(params.direction).toBe('asc');
    });

    it('read is undefined', () => {
      expect(params.read).toBeUndefined();
    });

    it('strokeCount is undefined', () => {
      expect(params.strokeCount).toBeUndefined();
    });
  });

  describe('validation', () => {
    it('{} is parse success', () => {
      expect(radicalQueryParams).toAcceptValue({});
    });

    describe('direction', () => {
      it('asc or desc only accept', () => {
        expect(radicalQueryParams).toAcceptPropertyValues('direction', ['asc', 'desc']);
        expect(radicalQueryParams).not.toAcceptPropertyValue('direction', 'abc');
      });
    });

    describe('read', () => {
      it('ひらがなを許容', () => {
        expect(radicalQueryParams).toAcceptPropertyValues('read', ['あ', 'つ', 'ば']);
      });

      it('ーを許容', () => {
        expect(radicalQueryParams).toAcceptPropertyValue('read', 'ー');
      });

      it('ひらがな以外は許容しない', () => {
        expect(radicalQueryParams).not.toAcceptPropertyValues('read', ['ア', 'ｱ', '亞', 'a', '1']);
      });

      it('舊日本語ひらがなは許容しない', () => {
        expect(radicalQueryParams).not.toAcceptPropertyValues('read', ['ぢ', 'づ', 'ゐ', 'ゑ', 'を']);
      });

      it('10文字以下を許容', () => {
        expect(radicalQueryParams).toAcceptPropertyValue('read', 'ああああああああああ');
        expect(radicalQueryParams).not.toAcceptPropertyValue('read', 'あああああああああああ');
      });
    });

    describe('strokeCount', () => {
      it('1〜17を許容', () => {
        expect(radicalQueryParams).toAcceptPropertyValues('strokeCount', [1, 5, 17]);
        expect(radicalQueryParams).not.toAcceptPropertyValues('strokeCount', [-19, 0, 18, 100]);
      });

      it('小數は許容しない', () => {
        expect(radicalQueryParams).not.toAcceptPropertyValues('strokeCount', [1.0, 5.1]);
      });

      it('文字列の數は許容しない', () => {
        expect(radicalQueryParams).not.toAcceptPropertyValues('strokeCount', ['1', '5', '17']);
      });
    });
  });
});
