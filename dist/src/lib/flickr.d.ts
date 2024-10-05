export interface Album {
    id: string;
    url: string;
}
export interface Photo {
    id: string;
    url: string;
}
export declare const getAlbums: () => Promise<Album[]>;
export declare const getPhotos: (albumId: string) => Promise<Photo[]>;
export declare const getAllPhotos: () => Promise<Photo[]>;
//# sourceMappingURL=flickr.d.ts.map