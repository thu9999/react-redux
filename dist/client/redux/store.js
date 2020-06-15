"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const reducers_1 = require("./reducers/reducers");
const redux_devtools_extension_1 = require("redux-devtools-extension");
const redux_thunk_1 = __importDefault(require("redux-thunk"));
const middlewares = [redux_thunk_1.default];
const middleWareEnhancer = redux_1.applyMiddleware(...middlewares);
const store = redux_1.createStore(reducers_1.rootReducer, redux_devtools_extension_1.composeWithDevTools(middleWareEnhancer));
exports.default = store;
//# sourceMappingURL=store.js.map