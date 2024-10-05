import React, { useEffect, useState } from 'react';
import { ImageList, ImageListItem } from '@mui/material';
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

  const x: React.CSSProperties = { height: '400px', paddingTop: '50px' };

  return (
    <div style={x}>
      <ImageList
        sx={{ width: '70rem', height: '100%' }}
        variant='masonry'
        cols={4}
        gap={1}
      >
        {photos.map((url) => (
          <ImageListItem key={url}>
            <img
              srcSet={`${url}?w=161&fit=crop&auto=format&dpr=2 2x`}
              src={`${url}?w=161&fit=crop&auto=format`}
              loading='lazy'
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
