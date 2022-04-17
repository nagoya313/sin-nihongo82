import { connectDatabase } from './connection.server';
import './env';
import { radicalSeed } from './seeds/radical';

(async () => {
  const db = connectDatabase();

  try {
    await radicalSeed(db);
  } catch (error) {
    console.error(error);
  }

  await db.destroy();
})();
