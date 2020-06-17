export const FLASH_MESSAGE = 'FLASH_MESSAGE';

export interface FlashMessageState {
    flashMessage: FlashMessage
}

export interface FlashMessage {
    message: string
}

export interface FlashMessageAction {
    type: typeof FLASH_MESSAGE,
    payload: string
}

export const initialFlashMessageState: FlashMessage = {
    message: ''
}

export function flashMessageReducer (state:FlashMessage = initialFlashMessageState, action: FlashMessageAction) {
    switch(action.type) {
        case FLASH_MESSAGE:
            return {
                ...state,
                message: action.payload
            }

        default:
            return state;
    }
}