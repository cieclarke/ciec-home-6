export interface Photo {
  id: string;
  url: string;
}

export async function getPhotos(): Promise<Photo[]> {
  const x = await fetch(`${__API_BASE_URL__}/photos`);
  return x.json();
}
