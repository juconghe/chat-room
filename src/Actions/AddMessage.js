import { ADD_MESSAGE } from './Actions';

export const addMessage = message => ({
    type: ADD_MESSAGE,
    payload: {
        id: Math.random(),
        message,
        fromUser: Math.random() > 0.5 ? 'juconghe' : 'mohan'
    }
});
