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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateRoute = exports.fakeAuth = void 0;
const React = __importStar(require("react"));
require("./App.scss");
const react_router_dom_1 = require("react-router-dom");
const auth_1 = __importDefault(require("./../services/auth"));
const Login = React.lazy(() => Promise.resolve().then(() => __importStar(require('./login/Login'))));
const Signup = React.lazy(() => Promise.resolve().then(() => __importStar(require('./signup/Signup'))));
const Home = React.lazy(() => Promise.resolve().then(() => __importStar(require('./home/Home'))));
exports.fakeAuth = {
    isAuthenticated: localStorage.getItem('isLogin') === 'true' ? true : false,
    authenticate(cb) {
        exports.fakeAuth.isAuthenticated = true;
        localStorage.setItem('isLogin', 'true');
        setTimeout(cb, 100);
    },
    signout(cb) {
        exports.fakeAuth.isAuthenticated = false;
        localStorage.setItem('isLogin', 'false');
        setTimeout(cb, 100);
    }
};
exports.PrivateRoute = (_a) => {
    var { children } = _a, rest = __rest(_a, ["children"]);
    return (React.createElement(react_router_dom_1.Route, Object.assign({}, rest, { render: ({ location }) => exports.fakeAuth.isAuthenticated ? (children) : (React.createElement(react_router_dom_1.Redirect, { to: {
                pathname: '/login',
                state: { from: location }
            } })) })));
};
const App = () => {
    const [signupError, setSignupError] = React.useState({});
    const onSignup = (value) => {
        // Clear signup error
        setSignupError({});
        auth_1.default.signup(value)
            .then(res => {
            console.log(res.data);
        })
            .catch(err => {
            setSignupError(err.response.data.errors);
        });
    };
    const onLogin = (username, password) => {
        console.log(username, password);
    };
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(React.Suspense, { fallback: React.createElement("div", null, "Loading...") },
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { exact: true, path: '/login' },
                    React.createElement(Login, { handleLogin: onLogin })),
                React.createElement(react_router_dom_1.Route, { exact: true, path: '/signup' },
                    React.createElement(Signup, { handleSignup: onSignup, errors: signupError })),
                React.createElement(exports.PrivateRoute, { path: "/home" },
                    React.createElement(Home, null)),
                React.createElement(react_router_dom_1.Redirect, { from: "/", to: "/login" })))));
};
exports.default = App;
//# sourceMappingURL=App.js.map