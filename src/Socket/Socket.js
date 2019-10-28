import socketIOClient from 'socket.io-client';

const socket = socketIOClient('http://chat-server.azurewebsites.net', {
    rejectUnauthorized: false,
    path: '/chat/'
});

export default socket;
