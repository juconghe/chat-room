import { ADD_MESSAGE } from './Actions';
let count = 0;

export const addMessage = message => ({
    type: ADD_MESSAGE,
    payload: {
        id: Math.random(),
        message,
        fromUser: count++ % 2 === 0 ? 'juconghe' : 'mohan'
    }
});
