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