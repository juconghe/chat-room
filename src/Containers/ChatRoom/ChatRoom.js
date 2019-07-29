import React from 'react';
import Message from '../../Components/Message';
import { Input } from 'antd';

import './Message.css';

const { TextArea } = Input;

const ChatRoom = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Message message="Hello Are you fking kidding me?" />
            <Message message="Hello" />
            <Message toMe={false} message="Hello" />
            <Message message="Hello" />
            <Message message="Hello Are you fking kidding me?" />
            <Message message="Hello" />
            <Message toMe={false} message="Hello" />
            <Message message="Hello" />
            <Message message="Hello Are you fking kidding me?" />
            <Message message="Hello" />
            <Message toMe={false} message="Hello" />
            <Message message="Hello" />
            <Message message="Hello Are you fking kidding me?" />
            <Message message="Hello" />
            <Message toMe={false} message="Hello" />
            <Message message="Hello" />
            <Message message="Hello" />
            <Message message="Hello" />
            <Message message="Hello" />
            <Message message="Hello" />
            <Message message="Hello" />
            <Message message="Hello" />
            <Message message="Hello" />
            <Message message="Hello" />
            <Message message="Hello" />
            <Message message="Hello" />
            <Message message="Hello" />
            <Message message="Hello" />
            <Message message="Hello" />
            <Message message="Hello" />
            <Message message="Hello" />
        </div>
    );
};

export default ChatRoom;
