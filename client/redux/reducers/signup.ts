export const SIGNUP = 'SIGNUP';

export interface SignupState {
    success: boolean
}

export interface SignupAction {
    type: typeof SIGNUP,
    payload: boolean
}

export const initialSignupState: SignupState = {
    success: false
}

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
