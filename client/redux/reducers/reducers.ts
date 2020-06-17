import { combineReducers } from 'redux';
import { signupReducer } from './signup';
import { flashMessageReducer } from './flash-message';
import { sessionReducer } from './session';

export const rootReducer = combineReducers({
    signup: signupReducer,
    flashMessage: flashMessageReducer,
    session: sessionReducer
})

export type RootState = ReturnType<typeof rootReducer>