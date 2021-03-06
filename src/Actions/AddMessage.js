import { ADD_MESSAGE, REST_MESSAGE } from './Actions';
import { emitMessage } from '../Socket/Emit';

export const sendMessage = ({ message, toUser, fromUser }) => dispatch => {
    emitMessage('sendMessage', { message, toUser });
    dispatch({
        type: ADD_MESSAGE,
        payload: {
            id: Math.random(),
            message,
            fromUser
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

export const resetMessage = () => ({
    type: REST_MESSAGE
});
