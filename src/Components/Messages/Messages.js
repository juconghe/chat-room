import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Message';

const Messages = ({ messages, userName }) =>
    messages.map(({ message, id, fromUser }) => (
        <Message key={id} message={message} toMe={fromUser !== userName} />
    ));

Messages.proptTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            message: PropTypes.string,
            fromUser: PropTypes.string
        })
    ).isRequired
};

export default Messages;
