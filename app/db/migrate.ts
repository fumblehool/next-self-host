import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { client, db } from './drizzle';

dotenv.config();

async function main() {
  const cwd = process.cwd();
  const migrationsFolder = path.join(cwd, './app/db/migrations');
  
  console.log('Current working directory:', cwd);
  console.log('Migrations folder:', migrationsFolder);
  console.log('Files in migrations folder:', fs.readdirSync(migrationsFolder));
  
  try {
    await migrate(db, {
      migrationsFolder: migrationsFolder,
    });
    console.log(`Migrations complete`);
  } catch (error) {
    console.error('Migration error:', error);
  } finally {
    await client.end();
  }
}

main();