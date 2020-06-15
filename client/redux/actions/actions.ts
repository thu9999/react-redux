import { SIGNUP } from '../types/signup';

export const signupAction = (success: boolean) => {
    return {
        type: SIGNUP,
        payload: success
    }
}