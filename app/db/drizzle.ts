import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config();

let client: ReturnType<typeof postgres>;
let db: ReturnType<typeof drizzle>;

if (process.env.NODE_ENV !== 'production' || process.env.NEXT_PHASE !== 'phase-production-build') {
  if (!process.env.DATABASE_URL) {
    console.warn('DATABASE_URL environment variable is not set. Database operations will fail.');
  } else {
    try {
      client = postgres(process.env.DATABASE_URL);
      db = drizzle(client);
    } catch (error) {
      console.error('Failed to initialize database connection:', error);
    }
  }
} else {
  console.log('Skipping database initialization during build');
}

export { client, db };