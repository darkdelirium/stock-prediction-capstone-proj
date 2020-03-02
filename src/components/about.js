import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeaderCommon from "./common/header.js";
import FooterCommon from "./common/footer.js";
import BreadcrumbCommon from "./common/breadcrumb.js";
import { Layout } from 'antd';
const { Content } = Layout;


class About extends Component {
  render() {
    return (
      <React.Fragment>
    <Layout className="layout">
      <HeaderCommon />
    <Content style={{ padding: '0 50px' }}>
      <BreadcrumbCommon />
      <div className="site-layout-content">
      <h1>Stock Prediction LTSM</h1>
      Capstone Project ITU 2020
      <h3>Frameworks and libraries Used</h3>
      <b>Frontend / JavaScript</b>
      <ul>
        <li>React</li>
        <li>Redux</li>
        <li>Axios</li>
        <li>Antd</li>
        <li>Amcharts</li>
      </ul>
      <b>Backend / Python</b>
      <ul>
        <li>Pandas</li>
        <li>Keras</li>
        <li>Flask</li>
      </ul>
      </div>
    </Content>
    <FooterCommon />
  </Layout>
      </React.Fragment>
    );
  }
}

export default About;
