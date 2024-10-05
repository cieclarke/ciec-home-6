const BASE_URL = 'http://localhost:8080';

export interface Photo {
  id: string;
  url: string;
}

export async function getPhotos(): Promise<Photo[]> {
  const x = await fetch(`${BASE_URL}/photos`);
  return await x.json();
}
