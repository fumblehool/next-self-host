import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const id = parseInt(request.nextUrl.searchParams.get('id') || '1');
  
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      for (let i = 1; i <= id; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const chunk = encoder.encode(`data: ${JSON.stringify({ data: `Data loaded after ${i} second${i > 1 ? 's' : ''}` })}\n\n`);
        controller.enqueue(chunk);
      }
      controller.close();
    }
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive',
    },
  });
}