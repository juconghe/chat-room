import React from 'react';
import { Layout, Typography } from 'antd';
import SideMenu from './Container/SideMenu';
import ChatList from './Container/ChatList';
import './App.css';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;
const chats = [
    {
        key: 1,
        title: 'Jucong'
    },
    {
        key: 2,
        title: 'Jucong'
    },
    {
        key: 3,
        title: 'Jucong'
    },
    {
        key: 4,
        title: 'Jucong'
    }
];

function App() {
    return (
        <Layout>
            <Sider trigger={null} collapsed>
                <SideMenu />
            </Sider>
            <Sider width={300} theme="light">
                <ChatList chats={chats} />
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <Title>Chat Room</Title>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#fff',
                        minHeight: 280
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
}

export default App;
