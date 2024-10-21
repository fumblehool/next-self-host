import StreamingContent from './StreamingContent';

export const dynamic = 'force-dynamic';

export default function Streaming() {
  return (
    <div>
      <h1>Streaming Demo with Server Components</h1>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
        <StreamingContent key={id} id={id} />
      ))}
    </div>
  );
}