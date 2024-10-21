'use client';
import { useState, useEffect } from 'react';

export default function StreamingContent({ id }: { id: number }) {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    const eventSource = new EventSource(`/api/fetchData?id=${id}`);

    eventSource.onmessage = (event) => {
      const jsonData = JSON.parse(event.data);
      setData(jsonData.data);
    };

    eventSource.onerror = (error) => {
      console.error('EventSource failed:', error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [id]);

  return (
    <div>
      <h2>Content {id}</h2>
      <p>{data || 'Loading...'}</p>
    </div>
  );
}