import { use } from 'react';
import { fetchData } from './actions';

export default function StreamingContent({ id }: { id: number }) {
  const data = use(fetchData(id));
  return (
    <div>
      <h2>Content {id}</h2>
      <p>{data}</p>
    </div>
  );
}
