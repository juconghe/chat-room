import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'antd';
const { Meta } = Card;

const ChatList = props => {
    const { chats } = props;

    const handleOnClick = chat => () => {
        props.handleOnClick(chat);
    };

    return (
        <div>
            {chats.map(chat => (
                <Card
                    key={chat.key}
                    style={{ marginTop: 16, marginLeft: 16, marginRight: 16 }}
                    onClick={handleOnClick(chat)}
                >
                    <Meta
                        avatar={<Icon type="user" />}
                        title={chat.toUser}
                    ></Meta>
                </Card>
            ))}
        </div>
    );
};

ChatList.propTypes = {
    chats: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            userName: PropTypes.string,
            toUser: PropTypes.string
        })
    ).isRequired,
    handleOnClick: PropTypes.func.isRequired
};
export default ChatList;
