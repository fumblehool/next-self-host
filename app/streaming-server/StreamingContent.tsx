import { Suspense } from 'react';
import { fetchData } from './actions';


async function Content({ id }: { id: number }) {
  const data = await fetchData(id);
  return (
    <div>
      <h2>Content {id}</h2>
      <p>{data}</p>
    </div>
  );
}

export default function StreamingContent({ id }: { id: number }) {
  return (
    <Suspense fallback={<LoadingCard id={id} />}>
      <Content id={id} />
    </Suspense>
  );
}
