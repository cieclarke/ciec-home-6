"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const title = () => {
    return react_1.default.createElement("h3", null, "clarke");
};
class App extends react_1.default.Component {
    render() {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("h1", { className: 'text-primary text-4xl font-bold' }, "chris"),
            title()));
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map