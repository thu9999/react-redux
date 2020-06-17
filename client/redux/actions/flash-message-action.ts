import { FLASH_MESSAGE } from '../reducers/flash-message';

export const flashMessageAction = (type: typeof FLASH_MESSAGE, payload: string) => {
    return {
        type: type,
        payload
    }
}