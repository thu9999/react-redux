import { SESSION_TOKEN } from '../reducers/session';

export const sessionTokenAction = (token: string) => {
    return {
        type: SESSION_TOKEN,
        payload: token
    }
}