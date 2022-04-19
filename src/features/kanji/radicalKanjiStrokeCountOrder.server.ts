import { sql } from 'kysely';
import { db } from '../../db/db.server';
import { escapeLike } from '../../libs/utils/sqlEscape';
import { type RadicalKanjiQueryParams } from './types';

type QueryParams = Omit<RadicalKanjiQueryParams, 'sort'> & { radicalId: number };

export const radicalKanjiStrokeCountOrder = ({ strokeCount, regular, read, radicalId, direction }: QueryParams) =>
  db
    .selectFrom('kanji')
    .select([
      'in_radical_stroke_count',
      sql<ReadonlyArray<number>>`array_agg(distinct code_point order by code_point)`.as('code_points'),
    ])
    .if(!!read, (qb) =>
      qb
        .innerJoin('kanji_read', 'code_point', 'kanji_read.kanji_code_point')
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        .where('read', 'like', `${escapeLike(read!)}%`)
    )
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    .if(strokeCount != null, (qb) => qb.where('in_radical_stroke_count', '=', strokeCount!))
    .if(regular !== 'none', (qb) => qb.where('regular', '=', regular === 'true'))
    .where('radical_code_point', '=', radicalId)
    .orderBy('in_radical_stroke_count', direction)
    .groupBy('in_radical_stroke_count')
    .execute();
