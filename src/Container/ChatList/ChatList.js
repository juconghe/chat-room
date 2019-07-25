import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'antd';
const { Meta } = Card;

const ChatList = props => {
    const { chats } = props;

    return (
        <div>
            {chats.map(chat => (
                <Card
                    key={chat.key}
                    style={{ marginTop: 16, marginLeft: 16, marginRight: 16 }}
                >
                    <Meta
                        avatar={<Icon type="user" />}
                        title={chat.title}
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
            title: PropTypes.string
        })
    ).isRequired
};
export default ChatList;
