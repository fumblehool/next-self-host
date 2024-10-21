import { Suspense } from 'react';
import StreamingContent from './StreamingContent';

export const dynamic = 'force-dynamic';

export default function Streaming() {
  return (
    <div>
      <h1>Streaming Demo with Server Components</h1>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
        <Suspense key={id} fallback={<LoadingCard id={id} />}>
          <StreamingContent id={id} />
        </Suspense>
      ))}
    </div>
  );
}

function LoadingCard({ id }: { id: number }) {
  return (
    <div>
      <h2>Content {id}</h2>
      <p>Loading...</p>
    </div>
  );
}