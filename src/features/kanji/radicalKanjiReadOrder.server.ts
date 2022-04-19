import { sql } from 'kysely';
import { db } from '../../db/db.server';
import { escapeLike } from '../../libs/utils/sqlEscape';
import { kanaTranslate } from '../../libs/utils/sqlFunction';
import { type RadicalKanjiQueryParams } from './types';

type QueryParams = Omit<RadicalKanjiQueryParams, 'sort'> & { radicalId: number };
type Results = ReadonlyArray<{ code_point: number; read: string }>;

export const radicalKanjiReadOrder = ({ strokeCount, regular, read, radicalId, direction }: QueryParams) =>
  db
    .selectFrom((db) =>
      db
        .selectFrom('kanji')
        .select([kanaTranslate.as('read_front'), 'read', 'code_point'])
        .innerJoin('kanji_read', 'code_point', 'kanji_read.kanji_code_point')
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        .if(strokeCount != null, (qb) => qb.where('in_radical_stroke_count', '=', strokeCount!))
        .if(regular !== 'none', (qb) => qb.where('regular', '=', regular === 'true'))
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        .if(!!read, (qb) => qb.where('read', 'like', `${escapeLike(read!)}%`))
        .where('radical_code_point', '=', radicalId)
        .as('kanjis')
    )
    .select([
      'read_front',
      sql<Results>`array_agg(json_build_object('code_point', code_point, 'read', read) order by read ${sql.raw(
        direction
      )}, code_point)`.as('results'),
    ])
    .orderBy('read_front', direction)
    .groupBy('read_front')
    .execute();
