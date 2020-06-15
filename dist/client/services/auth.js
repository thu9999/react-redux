"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_common_1 = __importDefault(require("../http-common"));
/**
 * Signup
 * @param value: SignupFormValue
 */
const signup = (value) => {
    return http_common_1.default.post('/api/users/signup', value);
};
exports.default = {
    signup
};
//# sourceMappingURL=auth.js.map