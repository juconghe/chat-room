import React from 'react';
import Messages from '../../Components/Messages';
import { Input } from 'antd';

import './Message.css';

const { TextArea } = Input;

const messages = [
    {
        id: 1,
        message: 'Hello',
        fromUser: 'juconghe'
    },
    {
        id: 2,
        message: 'Hello',
        fromUser: 'mohan'
    },
    {
        id: 3,
        message: 'how are you?',
        fromUser: 'juconghe'
    },
    {
        id: 4,
        message: 'I am fine thank you, and you?',
        fromUser: 'mohan'
    },
    {
        id: 5,
        message: 'me too, nice to meet you',
        fromUser: 'juconghe'
    },
    {
        id: 6,
        message: 'nice to meet you too',
        fromUser: 'mohan'
    },
    {
        id: 7,
        message: 'Have a good day',
        fromUser: 'juconghe'
    },
    {
        id: 8,
        message: 'same to you',
        fromUser: 'mohan'
    },
    {
        id: 9,
        message: 'bye',
        fromUser: 'juconghe'
    }
];

const ChatRoom = () => {
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '80vh',
                    overflowY: 'scroll'
                }}
            >
                <Messages messages={messages} />
            </div>
            <TextArea
                style={{ marginTop: 12, height: '8vh', resize: 'none' }}
            />
        </div>
    );
};

export default ChatRoom;
