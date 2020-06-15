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
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Login = (props) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { handleLogin } = props;
    return (React.createElement("div", { className: 'row d-flex justify-content-center align-items-center', onSubmit: e => {
            e.preventDefault();
            handleLogin(username, password);
        } },
        React.createElement("div", { className: 'col-md-4 col-md-offset-4' },
            React.createElement("form", { className: 'login-form' },
                React.createElement("div", { className: 'form-group' },
                    React.createElement("label", { htmlFor: 'inputUsername' }, "Username"),
                    React.createElement("input", { type: 'text', className: 'form-control', id: 'inputUsername', "aria-describedby": 'usernamehelp', placeholder: 'Enter username', value: username, onChange: e => {
                            const value = e.target.value;
                            setUsername(value);
                        } })),
                React.createElement("div", { className: 'form-group' },
                    React.createElement("label", { htmlFor: 'inputPassword' }, "Password"),
                    React.createElement("input", { type: 'password', className: 'form-control', id: 'inputPassword', placeholder: 'Password', value: password, onChange: e => {
                            const value = e.target.value;
                            setPassword(value);
                        } })),
                React.createElement("div", { className: 'form-group' },
                    "Haven't had an account yet? ",
                    React.createElement(react_router_dom_1.Link, { to: "/signup" }, "Signup")),
                React.createElement("button", { type: 'submit', className: 'btn btn-primary w-100' }, "Submit")))));
};
exports.default = Login;
//# sourceMappingURL=Login.js.map