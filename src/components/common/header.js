import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
const { Header } = Layout;

const HeaderCommon = ({currentUrl}) => {

    return(<>
        <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        className="menu"
      >
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2">Results</Menu.Item>
        <Menu.Item key="3"><Link to="/about">About</Link></Menu.Item>
      </Menu>
    </Header>
    </>);
} 

export default HeaderCommon;