import { FileMigrationProvider, Migrator } from 'kysely';
import { connectDatabase } from './connection';
import './env';

(async () => {
  const db = connectDatabase();
  const migrator = new Migrator({ db, provider: new FileMigrationProvider('./src/db/migrations') });

  const { error, results } = await migrator.migrateToLatest();

  results?.forEach(({ status, migrationName }) => {
    switch (status) {
      case 'Success':
        console.log(`migration "${migrationName}" was executed successfully`);
        break;
      case 'Error':
        console.error(`failed to execute migration "${migrationName}"`);
        break;
    }
  });

  if (error) {
    console.error('failed to migrate');
    console.error(error);
    process.exit(1);
  }
})();
