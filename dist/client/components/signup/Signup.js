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
const react_router_dom_1 = require("react-router-dom");
const TextField_1 = __importDefault(require("../text-field/TextField"));
const Signup = (props) => {
    const { handleSignup, errors } = props;
    const [username, setUsername] = React.useState('');
    const [email, setemail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    return (React.createElement("div", { className: 'row d-flex justify-content-center' },
        React.createElement("div", { className: 'col-md-4 col-md-offset-4' },
            React.createElement("form", { className: 'login-form', onSubmit: e => {
                    e.preventDefault();
                    handleSignup({ username, email, password, confirmPassword });
                } },
                React.createElement(TextField_1.default, { id: 'inputUsername', error: errors === null || errors === void 0 ? void 0 : errors.username, label: 'Username', type: 'text', value: username, handleChange: (value) => {
                        setUsername(value);
                    } }),
                React.createElement(TextField_1.default, { id: 'inputEmail', error: errors === null || errors === void 0 ? void 0 : errors.email, label: 'Email', type: 'text', value: email, handleChange: (value) => {
                        setemail(value);
                    } }),
                React.createElement(TextField_1.default, { id: 'inputPassword', error: errors === null || errors === void 0 ? void 0 : errors.password, label: 'Password', type: 'password', value: password, handleChange: (value) => {
                        setPassword(value);
                    } }),
                React.createElement(TextField_1.default, { id: 'inputConfirmPassword', error: errors === null || errors === void 0 ? void 0 : errors.confirmPassword, label: 'Confirm password', type: 'password', value: confirmPassword, handleChange: (value) => {
                        setConfirmPassword(value);
                    } }),
                React.createElement("div", { className: 'form-group' },
                    "Already had an account? ",
                    React.createElement(react_router_dom_1.Link, { to: "/login" }, "Login")),
                React.createElement("button", { type: 'submit', className: 'btn btn-primary w-100 mt-2' }, "Signup")))));
};
exports.default = Signup;
//# sourceMappingURL=Signup.js.map