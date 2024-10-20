// app/api/healthz/route.ts

import { NextResponse } from 'next/server';
import { db } from '@/app/db/drizzle'; // Adjust this import path as needed
import { sql } from 'drizzle-orm';

export async function GET() {
  try {
    // Test database connection using Drizzle
    await db.execute(sql`SELECT 1`);

    // If we get here, the database connection was successful
    return NextResponse.json({ status: 'OK', database: 'connected' }, { status: 200 });
  } catch (error: unknown) {
    console.error('Health check failed:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json(
      { status: 'ERROR', message: 'Database connection failed', error: errorMessage },
      { status: 503 }
    );
  }
}