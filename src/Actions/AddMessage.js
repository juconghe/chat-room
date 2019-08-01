import { ADD_MESSAGE } from './Actions';
import { emitMessage } from '../Socket/Emit';

export const sendMessage = message => dispatch => {
    emitMessage('chatMessage', { message, toUser: 'mohan' });
    dispatch({
        type: ADD_MESSAGE,
        payload: {
            id: Math.random(),
            message,
            fromUser: 'juconghe'
        }
    });
};

export const addMessage = ({ message, fromUser }) => ({
    type: ADD_MESSAGE,
    payload: {
        id: Math.random(),
        message,
        fromUser
    }
});
