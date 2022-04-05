import { Avatar, Button, Layout, Menu, Tag } from 'antd';
import React from 'react';
import './App.css';
const { Header, Content, Sider } = Layout
const App = () => {
  return (
    <Layout>
      <Header className="header">
        <div className='logo'>
          <Button>test</Button>
          <Tag closable>eee</Tag>
          <Avatar />
        </div>

      </Header>
      <Layout>
        <Sider width={200} className="sidte-layout-background">
          <Menu>
            <Menu.Item>1231231</Menu.Item>
          </Menu>
        </Sider>
      </Layout>
    </Layout>
  );
}

export default App;
