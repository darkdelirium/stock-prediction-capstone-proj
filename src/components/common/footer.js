import React from "react";
import { Link } from "react-router-dom";
import { Layout } from 'antd';
const { Footer } = Layout;

const FooterCommon = ()=> {
    return (<>
    <Footer style={{ textAlign: 'center' }}>Capstone Project © 2020 Stock Prediction Frontend v.0.1</Footer>
    </>)
}

export default FooterCommon;