import socket from './Socket';

export const unSubscribeTopic = topic => {
    socket.removeListener(topic);
};
