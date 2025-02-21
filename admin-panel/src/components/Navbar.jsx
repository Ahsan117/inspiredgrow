import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { UserOutlined, GlobalOutlined } from '@ant-design/icons';

const Navbar = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">English</Menu.Item>
      <Menu.Item key="2">Spanish</Menu.Item>
      <Menu.Item key="3">French</Menu.Item>
    </Menu>
  );

  const userMenu = (
    <Menu>
      <Menu.Item key="1">Logout</Menu.Item>
    </Menu>
  );

  return (
    <div style={{ backgroundColor: 'deepblue', display: 'flex', justifyContent: 'space-between', padding: '0 20px', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button icon={<Menu />} />
        <span style={{ color: 'white', marginLeft: '10px' }}>SAAS ADMIN</span>
      </div>
      <div>
        <Dropdown overlay={menu}>
          <Button icon={<GlobalOutlined />} style={{ marginRight: '10px' }}>English</Button>
        </Dropdown>
        <Dropdown overlay={userMenu}>
          <Button icon={<UserOutlined />}>User</Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;