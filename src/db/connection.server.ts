import { Kysely, PostgresDialect } from 'kysely';
import { type Database } from './types';

export const connectDatabase = () => {
  console.log('db connection');

  const db = new Kysely<Database>({
    dialect: new PostgresDialect({ connectionString: process.env['DATABASE_URL'] }),
    log(event) {
      switch (event.level) {
        case 'query': {
          console.log(event.query.sql);
          console.log(event.query.parameters);
          break;
        }
        case 'error': {
          console.log(event.error);
        }
      }
    },
  });

  return db;
};
