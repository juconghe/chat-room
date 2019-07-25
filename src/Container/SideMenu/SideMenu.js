import React from 'react';
import { Menu, Icon } from 'antd';

const SideMenu = props => {
    const switchTab = ({ key }) => {
        console.log(key);
    };

    return (
        <Menu
            onClick={switchTab}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
        >
            <Menu.Item key="1">
                <Icon type="user" />
            </Menu.Item>
            <Menu.Item key="2">
                <Icon type="message" />
            </Menu.Item>
        </Menu>
    );
};

export default SideMenu;
