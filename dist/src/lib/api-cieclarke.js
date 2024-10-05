"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPhotos = void 0;
const BASE_URL = 'http://localhost:8080/albums';
async function getPhotos() {
    const x = await fetch(`${BASE_URL}/getAllPhotos`);
    return await x.json();
}
exports.getPhotos = getPhotos;
//# sourceMappingURL=api-cieclarke.js.map