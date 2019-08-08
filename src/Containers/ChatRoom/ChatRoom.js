import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Messages from '../../Components/Messages';
import { Input } from 'antd';
import { sendMessage, addMessage } from '../../Actions/AddMessage';
import { subscribeTopic } from '../../Socket/Subscribe';
import { unSubscribeTopic } from '../../Socket/UnSubscribeTopic';
import { emitMessage } from '../../Socket/Emit';

import './Message.css';

const { TextArea } = Input;

const ChatRoom = props => {
    const {
        messages,
        chat: { userName, toUser }
    } = props;
    const [message, updateMessage] = useState('');

    useEffect(() => {
        if (userName !== undefined) emitMessage('subscribe', { userName });
    }, [userName]);

    useEffect(() => {
        subscribeTopic('message', payload => {
            props.addMessage(payload);
        });
        return () => unSubscribeTopic('message');
    });

    const handlePressEnter = e => {
        if (e.keyCode === 13 && message !== '') {
            props.sendMessage({ message, toUser, fromUser: userName });
            updateMessage('');
        }
    };

    if (userName === undefined) return null;

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
    chat: PropTypes.shape({
        userName: PropTypes.any,
        toUser: PropTypes.any
    }).isRequired
};

export default connect(
    mapStateToProps,
    { sendMessage, addMessage }
)(ChatRoom);
