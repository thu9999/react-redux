import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/reducers';
import { Action } from 'redux';
import SignupFormValue from '../../interfaces/signup-form-value';
import AuthService from './../../services/auth';

/**
 * Sign up
 */
export const thunkSignup = (
    value: SignupFormValue
): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    const result = await AuthService.signup(value);
    console.log(result);
}

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>