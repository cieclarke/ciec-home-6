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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const client_1 = require("react-dom/client");
const Home_1 = __importDefault(require("./components/Home"));
const Container_1 = __importDefault(require("./components/Container"));
require("./styles/app.css");
const Photos_1 = __importDefault(require("./components/Photos"));
const rootElement = document.getElementById('root');
if (rootElement) {
    const root = (0, client_1.createRoot)(rootElement);
    root.render(React.createElement(React.StrictMode, null,
        React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(react_router_dom_1.Routes, null,
                React.createElement(react_router_dom_1.Route, { path: '/', element: React.createElement(Container_1.default, null) },
                    React.createElement(react_router_dom_1.Route, { path: '/photos', element: React.createElement(Photos_1.default, null) }),
                    React.createElement(react_router_dom_1.Route, { index: true, element: React.createElement(Home_1.default, null) }))))));
}
//# sourceMappingURL=index.js.map