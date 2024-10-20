import { NextResponse } from 'next/server';
import { db } from '@/app/db/drizzle';
import { todos } from '@/app/db/schema';
import { revalidatePath } from 'next/cache';

export async function POST() {
  try {
    // Check if we're in a build environment
    if (process.env.NODE_ENV === 'production' && process.env.NEXT_PHASE === 'phase-production-build') {
      console.warn('Skipping database operation during build');
      return NextResponse.json({ message: 'Build-time simulation: All todos would be deleted' });
    }

    // Proceed with the database operation
    await db.delete(todos);
    revalidatePath('/db');
    return NextResponse.json({ message: 'All todos deleted successfully' });
  } catch (error) {
    console.error('Error in POST /db/clear:', error);
    return NextResponse.json({ message: 'An error occurred while deleting todos' }, { status: 500 });
  }
}