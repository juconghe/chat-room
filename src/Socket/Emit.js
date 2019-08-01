import socket from './Socket';

export const emitMessage = (topic, message) => {
    socket.emit(topic, message);
};
