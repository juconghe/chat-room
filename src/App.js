import React from 'react';
import { Layout, Typography } from 'antd';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './Reducers';
import SideMenu from './Containers/SideMenu';
import ChatList from './Containers/ChatList';
import ChatRoom from './Containers/ChatRoom';
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

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') middlewares.push(logger);
const store = createStore(reducers, applyMiddleware(...middlewares));

function App() {
    return (
        <Provider store={store}>
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
                        <ChatRoom />
                    </Content>
                </Layout>
            </Layout>
        </Provider>
    );
}

export default App;
