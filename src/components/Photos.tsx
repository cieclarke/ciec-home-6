import React, { useEffect, useState } from 'react';
import * as api from '../lib/api-cieclarke';

export default function Photos(): React.JSX.Element {
  const [photos, setPhotos] = useState<Array<string>>([]);
  useEffect(() => {
    const fetch = async () => {
      const allPhotos = await api.getPhotos();
      setPhotos(allPhotos.map((p) => p.url));
    };
    fetch();
  }, []);

  return (
    <>
      {photos.map((url) => (
        <img src={`${url}`} />
      ))}
    </>
  );
}
