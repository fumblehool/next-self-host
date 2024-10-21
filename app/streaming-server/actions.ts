'use server';

export async function fetchData(id: number): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, id * 1000));
  return `Data loaded after ${id} second${id > 1 ? 's' : ''}`;
}