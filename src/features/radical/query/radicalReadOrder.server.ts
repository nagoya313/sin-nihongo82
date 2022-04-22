import { sql } from 'kysely';
import { db } from '~/db/db.server';
import { escapeLike } from '~/utils/sql';
import { type RadicalQueryParams } from './types';

type Results = ReadonlyArray<{ code_point: number; read: string }>;

export const radicalReadOrder = ({ direction, strokeCount, read }: Omit<RadicalQueryParams, 'sort'>) =>
  db
    .selectFrom((db) =>
      db
        .selectFrom('radical')
        .select([sql<string>`left(read, 1)`.as('read_front'), 'read', 'code_point'])
        .innerJoin('radical_read', 'radical.code_point', 'radical_read.radical_code_point')
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        .if(strokeCount != null, (qb) => qb.where('stroke_count', '=', strokeCount!))
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        .if(!!read, (qb) => qb.where('read', 'like', `${escapeLike(read!)}%`))
        .as('radicals')
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
