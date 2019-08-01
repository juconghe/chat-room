import socket from './Socket';

export const subscribeTopic = (topic, cb) => {
    socket.on(topic, message => cb(message));
};
