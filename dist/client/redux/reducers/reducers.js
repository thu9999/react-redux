"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = void 0;
const redux_1 = require("redux");
const signup_1 = require("./signup");
exports.rootReducer = redux_1.combineReducers({
    signup: signup_1.signupReducer
});
//# sourceMappingURL=reducers.js.map