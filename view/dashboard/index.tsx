'use client';

import type { MenuProps } from 'antd';
import style from '../../style/dashboard.module.scss';
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
  getItem('Data', '2', <FileOutlined />),
  getItem('Charity', '6', <FileOutlined />),
  getItem('Quizzes', '7', <FileOutlined />),
];

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#000',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#fff',
};

interface Props {
  children: React.ReactNode;
}

export default function Dashboard(props: Props) {
  return (
    <>
      <div className={`${style['dashboard-wrapper']}`}>
        <Space direction='vertical' style={{ width: '100%' }}>
          <Layout className='main-layout'>
            <Sider className='sidebar-main'>
              <div className='inner-sidebar'>
                <Menu
                  defaultSelectedKeys={['1']}
                  mode='inline'
                  items={items}
                  className='sidebar-menu'
                  style={{ padding: '0 8px' }}
                />
              </div>
            </Sider>
            <Layout className='main-contain-layout'>
              <Content>{props.children}</Content>
            </Layout>
          </Layout>
        </Space>
      </div>
    </>
  );
}
