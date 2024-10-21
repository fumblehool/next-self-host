'use server';

export async function fetchData(id: number): Promise<string> {
  let result = '';
  for (let i = 1; i <= id; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    result += `Chunk ${i} `;
  }
  return `${result}(total ${id} second${id > 1 ? 's' : ''})`;
}