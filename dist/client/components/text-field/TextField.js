"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const TextField = (props) => {
    const { id, error, label, type, value, handleChange } = props;
    return (React.createElement("div", { className: 'form-group' },
        React.createElement("label", { htmlFor: id, className: classnames_1.default('font-weight-bold', { 'text-danger': error }) }, label),
        React.createElement("input", { type: type, className: classnames_1.default('form-control', { 'is-invalid': error }), id: id, "aria-describedby": 'usernamehelp', placeholder: 'Enter username', value: value, onChange: e => {
                const newValue = e.target.value;
                handleChange(newValue);
            } }),
        error && React.createElement("span", { className: classnames_1.default('help-block', 'text-danger') }, error)));
};
exports.default = TextField;
//# sourceMappingURL=TextField.js.map