import { combineReducers } from 'redux';
import { signupReducer } from './signup';

export const rootReducer = combineReducers({
    signup: signupReducer
})

export type RootState = ReturnType<typeof rootReducer>