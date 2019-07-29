import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';

const Message = props => {
    const { toMe } = props;
    if (toMe) {
        return (
            <div style={{ display: 'flex', marginTop: 8 }}>
                <Avatar style={{ marginRight: 8 }} icon="user" />
                <p className="to-me">{props.message}</p>
            </div>
        );
    } else {
        return (
            <div
                style={{ display: 'flex', alignSelf: 'flex-end', marginTop: 8 }}
            >
                <p className="from-me">{props.message}</p>
                <Avatar style={{ marginLeft: 8 }} icon="user" />
            </div>
        );
    }
};

Message.propTypes = {
    message: PropTypes.string.isRequired
};

Message.defaultProps = {
    toMe: true
};

export default Message;
