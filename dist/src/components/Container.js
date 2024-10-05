"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const MainLink_1 = __importDefault(require("./MainLink"));
const HomeLink_1 = __importDefault(require("./HomeLink"));
const react_router_dom_1 = require("react-router-dom");
function Container() {
    return (react_1.default.createElement("div", { id: 'site' },
        react_1.default.createElement("div", { id: 'hero' }),
        react_1.default.createElement("div", { id: 'banner' },
            react_1.default.createElement(HomeLink_1.default, { href: '/', text: 'cieclarke' })),
        react_1.default.createElement("div", { id: 'home-menu' },
            react_1.default.createElement("nav", null,
                react_1.default.createElement("div", { className: 'flex flex-row w-full' },
                    react_1.default.createElement("div", { className: 'flex-1 text-center' },
                        react_1.default.createElement(MainLink_1.default, { href: '/photos', text: 'Photos' }))))),
        react_1.default.createElement("div", { id: 'content' },
            react_1.default.createElement(react_router_dom_1.Outlet, null))));
}
exports.default = Container;
//# sourceMappingURL=Container.js.map