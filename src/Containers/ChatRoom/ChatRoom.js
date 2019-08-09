import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Messages from '../../Components/Messages';
import { Input } from 'antd';
import {
    sendMessage,
    addMessage,
    resetMessage
} from '../../Actions/AddMessage';
import { subscribeTopic } from '../../Socket/Subscribe';
import { unSubscribeTopic } from '../../Socket/UnSubscribeTopic';

import './Message.css';

const { TextArea } = Input;

const ChatRoom = props => {
    const { messages, userName, toUser } = props;
    const [message, updateMessage] = useState('');
    const callReset = useCallback(props.resetMessage);

    useEffect(() => {
        subscribeTopic('message', payload => {
            props.addMessage(payload);
        });
        return () => unSubscribeTopic('message');
    });

    useEffect(() => {
        callReset();
    }, [callReset, toUser]);

    const handlePressEnter = e => {
        if (e.keyCode === 13 && message !== '') {
            props.sendMessage({ message, toUser, fromUser: userName });
            updateMessage('');
        }
    };

    if (toUser === undefined) return null;

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
                <Messages messages={messages} userName={userName} />
            </div>
            <TextArea
                value={message}
                onChange={e => updateMessage(e.target.value)}
                onKeyUp={handlePressEnter}
                style={{ marginTop: 12, height: '8vh', resize: 'none' }}
            />
        </div>
    );
};

const mapStateToProps = state => ({
    messages: state.messages
});

ChatRoom.propTypes = {
    messages: PropTypes.array.isRequired,
    sendMessage: PropTypes.func.isRequired,
    addMessage: PropTypes.func.isRequired,
    userName: PropTypes.string.isRequired,
    toUser: PropTypes.string.isRequired
};

export default connect(
    mapStateToProps,
    { sendMessage, addMessage, resetMessage }
)(ChatRoom);
