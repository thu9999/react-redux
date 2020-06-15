import { SignupState, initialSignupState, SignupAction, SIGNUP } from "../types/signup";

export function signupReducer (
    state: SignupState = initialSignupState, 
    action: SignupAction
) {
    switch(action.type) {
        case SIGNUP:
            return {
                ...state,
                success: action.payload
            }
        default:
            return state;
    }
}
