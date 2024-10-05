"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const material_1 = require("@mui/material");
const api = __importStar(require("../lib/api-cieclarke"));
function Photos() {
    const [photos, setPhotos] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const fetch = async () => {
            const allPhotos = await api.getPhotos();
            setPhotos(allPhotos.map((p) => p.url));
        };
        fetch();
    }, []);
    return (react_1.default.createElement(material_1.ImageList, { sx: { width: '70rem', height: '100%' }, variant: 'masonry', cols: 4, gap: 1 }, photos.map((url) => (react_1.default.createElement(material_1.ImageListItem, { key: url },
        react_1.default.createElement("img", { srcSet: `${url}?w=161&fit=crop&auto=format&dpr=2 2x`, src: `${url}?w=161&fit=crop&auto=format`, loading: 'lazy' }))))));
}
exports.default = Photos;
//# sourceMappingURL=Photos.js.map