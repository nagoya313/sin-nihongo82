import { sql } from 'kysely';
import { db } from '../../db/db.server';
import { escapeLike } from '../../libs/utils/sqlEscape';
import { type RadicalQueryParams } from './types';

export const radicalStrokeCountOrder = ({ direction, strokeCount, read }: Omit<RadicalQueryParams, 'sort'>) =>
  db
    .selectFrom('radical')
    .select(['stroke_count', sql<ReadonlyArray<number>>`array_agg(code_point order by code_point)`.as('code_points')])
    .if(!!read, (qb) =>
      qb
        .innerJoin('radical_read', 'radical.code_point', 'radical_read.radical_code_point')
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        .where('read', 'like', `${escapeLike(read!)}%`)
    )
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    .if(strokeCount != null, (qb) => qb.where('stroke_count', '=', strokeCount!))
    .orderBy('stroke_count', direction)
    .groupBy('stroke_count')
    .execute();
