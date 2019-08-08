import React, { useState } from 'react';
import { Layout, Typography } from 'antd';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './Reducers';
import SideMenu from './Containers/SideMenu';
import ChatList from './Containers/ChatList';
import ChatRoom from './Containers/ChatRoom';
import UserModal from './Components/UserModal';
import './App.css';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;
const chats = [
    {
        key: 1,
        toUser: 'Jucong'
    },
    {
        key: 2,
        toUser: 'Mo'
    }
];

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') middlewares.push(logger);
const store = createStore(reducers, applyMiddleware(...middlewares));

const App = () => {
    const [chat, setChat] = useState({});
    const [userName, setUserName] = useState('');
    return (
        <Provider store={store}>
            <Layout>
                <Sider trigger={null} collapsed>
                    <SideMenu />
                </Sider>
                <Sider width={300} theme="light">
                    <ChatList
                        chats={chats}
                        handleOnClick={({ userName, toUser }) =>
                            setChat({ userName, toUser })
                        }
                    />
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Title>
                            {chat.toUser
                                ? `Talking to ${chat.toUser}`
                                : 'Select one to chat'}
                        </Title>
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280
                        }}
                    >
                        <ChatRoom userName={userName} toUser={chat.toUser} />
                    </Content>
                </Layout>
            </Layout>
            <UserModal visible={userName === ''} handleSelect={setUserName} />
        </Provider>
    );
};

export default App;
