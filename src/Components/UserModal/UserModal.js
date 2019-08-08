import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { emitMessage } from '../../Socket/Emit';
import { Modal, Select, Button } from 'antd';
const { Option } = Select;

const UserModal = props => {
    const [userName, setUserName] = useState('');

    const handleChange = value => {
        setUserName(value);
    };

    const handleSave = () => {
        if (userName !== '') {
            emitMessage('subscribe', { userName });
            props.handleSelect(userName);
        }
    };

    return (
        <Modal
            title="Select Your Username"
            visible={props.visible}
            footer={<Button onClick={handleSave}>Save</Button>}
        >
            <Select
                style={{ width: '100%' }}
                value={userName}
                onChange={handleChange}
            >
                <Option value="Jucong">Jucong</Option>
                <Option value="Mo">Mo</Option>
            </Select>
        </Modal>
    );
};

UserModal.propTypes = {
    handleSelect: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired
};

export default UserModal;
