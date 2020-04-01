import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
const { Header } = Layout;

const HeaderCommon = ({currentUrl}) => {
  const getCurrentTab = (url) => {
    switch(url) {
      case '/':
        return ['1']
      case '/results':
        return ['2']
      case '/about':
        return ['3']
      default:
        return ['1']
    } 
  }
    return(<>
        <Header>
      <div className="logo" >Stock Prefiction</div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={getCurrentTab(currentUrl)}
        className="menu"
      >
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/">Results</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/about">About</Link></Menu.Item>
      </Menu>
    </Header>
    </>);
} 

export default HeaderCommon;