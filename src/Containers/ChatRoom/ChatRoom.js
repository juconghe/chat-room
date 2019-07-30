import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Messages from '../../Components/Messages';
import { Input } from 'antd';

import './Message.css';

const { TextArea } = Input;

const ChatRoom = props => {
    const { messages } = props;
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

const mapStateToProps = state => ({
    messages: state.messages
});

ChatRoom.propTypes = {
    messages: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(ChatRoom);
