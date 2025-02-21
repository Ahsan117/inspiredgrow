import React from 'react';
import { Menu } from 'antd';
import {
  DashboardOutlined,
  UserOutlined,
  ShopOutlined,
  EnvironmentOutlined,
  MessageOutlined,
  BarChartOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';

const Sidebar = () => {
  return (
    <Menu mode="inline" defaultSelectedKeys={['1']} style={{ backgroundColor: 'lightblue', height: '100vh' }}>
      <Menu.Item key="1" icon={<DashboardOutlined />}>Dashboard</Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>User</Menu.Item>
      <Menu.Item key="3" icon={<ShopOutlined />}>Stores</Menu.Item>
      <Menu.Item key="4" icon={<EnvironmentOutlined />}>Places</Menu.Item>
      <Menu.Item key="5" icon={<MessageOutlined />}>Messaging</Menu.Item>
      <Menu.SubMenu key="6" icon={<BarChartOutlined />} title="Reports">
        <Menu.Item key="7">Profit & Loss Report</Menu.Item>
        <Menu.Item key="8">Sales & Payment Report</Menu.Item>
        <Menu.Item key="9">Customer Order</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="10" icon={<SettingOutlined />}>Settings</Menu.Item>
      <Menu.Item key="11" icon={<QuestionCircleOutlined />}>Help</Menu.Item>
    </Menu>
  );
};

export default Sidebar;