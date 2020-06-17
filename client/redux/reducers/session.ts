export const SESSION_TOKEN = 'SESSION_TOKEN';
export const SESSION_REFRESH_TOKEN = 'SESSION_REFRESH_TOKEN';

export const SESSION = SESSION_TOKEN || SESSION_REFRESH_TOKEN;

export interface SessionState {
    token: string
    refreshToken: string
}

export interface SessionAction {
    type: typeof SESSION,
    payload: string
}

export const initialSessionState: SessionState = {
    token: localStorage.getItem('token'),
    refreshToken: localStorage.getItem('refreshToken')
}

export function sessionReducer (
    state: SessionState = initialSessionState, 
    action: SessionAction
) {
    switch(action.type) {
        // Update token
        case SESSION_TOKEN:
            return {
                ...state,
                token: action.payload
            }

        // Update refresh token
        case SESSION_REFRESH_TOKEN:
            return {
                ...state,
                refreshToken: action.payload
            }

        default:
            return state;
    }
}
