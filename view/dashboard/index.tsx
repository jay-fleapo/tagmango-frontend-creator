'use client';

import type { MenuProps } from 'antd';

import { Layout, Space, Menu, Button } from 'antd';

const { Header, Sider, Content } = Layout;

import { FileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', '1', <FileOutlined />),
  getItem('Productivity', 'sub1', <UserOutlined />, [
    getItem('Habits', '3'),
    getItem('Tasks', '4'),
  ]),
  getItem('Data', 'sub2', <TeamOutlined />, [
    getItem('Data 1', '6'),
    getItem('Data 2', '8'),
  ]),
  getItem('Events', '9', <FileOutlined />),
];

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#000',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#fff',
};

const siderStyle: React.CSSProperties = {
  height: '100dvh',
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#fff',
  overflow: 'auto',
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

interface Props {
  children: React.ReactNode;
}

export default function Dashboard(props: Props) {
  return (
    <>
      <Space direction='vertical' style={{ width: '100%' }}>
        <Layout
          style={{
            width: '100%',
            height: '100%',
            minHeight: '100dvh',
            background: '#eff2f5',
          }}
        >
          <Sider style={siderStyle} width={250}>
            <Menu defaultSelectedKeys={['1']} mode='inline' items={items} />
          </Sider>
          <Layout style={{ marginLeft: 250 }}>
            <Header style={headerStyle}>Header</Header>
            <Content
              style={{
                padding: '16px 15px',
                overflow: 'initial',
              }}
            >
              {props.children}
            </Content>
            {/* <Footer style={footerStyle}>Footer</Footer> */}
          </Layout>
        </Layout>
      </Space>
    </>
  );
}
