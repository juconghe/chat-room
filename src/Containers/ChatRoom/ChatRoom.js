import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Messages from '../../Components/Messages';
import { Input } from 'antd';
import { sendMessage, addMessage } from '../../Actions/AddMessage';
import { subscribeTopic } from '../../Socket/Subscribe';

import './Message.css';

const { TextArea } = Input;

const ChatRoom = props => {
    const { messages } = props;
    const [message, updateMessage] = useState('');
    const wrappedAddMessage = useCallback(props.addMessage);

    useEffect(() => {
        subscribeTopic('sendtomohan', message => {
            wrappedAddMessage(message);
        });
    }, [wrappedAddMessage]);

    const handlePressEnter = e => {
        if (e.keyCode === 13 && message !== '') {
            props.sendMessage(message);
            updateMessage('');
        }
    };

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
    addMessage: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    { sendMessage, addMessage }
)(ChatRoom);
