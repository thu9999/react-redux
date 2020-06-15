"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupReducer = void 0;
const signup_1 = require("../types/signup");
function signupReducer(state = signup_1.initialSignupState, action) {
    switch (action.type) {
        case signup_1.SIGNUP:
            return Object.assign(Object.assign({}, state), { success: action.payload });
        default:
            return state;
    }
}
exports.signupReducer = signupReducer;
//# sourceMappingURL=signup.js.map