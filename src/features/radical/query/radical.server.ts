import { sql } from 'kysely';
import { db } from '~/db/db.server';

export const radical = (codePoint: number) =>
  db
    .selectFrom('radical')
    .innerJoin('kanji', 'radical.code_point', 'kanji.radical_code_point')
    .innerJoin('radical_read', 'radical.code_point', 'radical_read.radical_code_point')
    .select([
      'radical.stroke_count',
      'radical.code_point',
      sql<number>`cast(count(kanji.code_point) as int2)`.as('kanji_count'),
      sql<ReadonlyArray<string>>`array_agg(distinct read order by read)`.as('reads'),
      sql<string>`chr(radical.code_point)`.as('radical'),
    ])
    .where('radical.code_point', '=', codePoint)
    .groupBy('radical.code_point')
    .executeTakeFirst();
