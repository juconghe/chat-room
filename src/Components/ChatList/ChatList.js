import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const ChatList = props => (
    <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar>{props.avatar}</Avatar>
        </ListItemAvatar>
        <ListItemText
            primary={props.userName}
            secondary={props.secondaryText}
        />
    </ListItem>
);

ChatList.proptTypes = {
    avatar: PropTypes.string,
    userName: PropTypes.string.isRequired,
    secondaryText: PropTypes.string
};

export default ChatList;
