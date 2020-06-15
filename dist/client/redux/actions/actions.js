"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupAction = void 0;
const signup_1 = require("../types/signup");
exports.signupAction = (success) => {
    return {
        type: signup_1.SIGNUP,
        payload: success
    };
};
//# sourceMappingURL=actions.js.map