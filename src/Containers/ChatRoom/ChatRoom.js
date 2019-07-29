import React from 'react';
import Message from '../../Components/Message';
import { Input } from 'antd';

import './Message.css';

const { TextArea } = Input;

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
            <TextArea
                style={{ marginTop: 12, height: '8vh', resize: 'none' }}
            />
        </div>
    );
};

export default ChatRoom;
