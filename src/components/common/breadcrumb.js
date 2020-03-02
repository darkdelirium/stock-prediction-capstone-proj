import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from 'antd';


const BreadcrumbCommon = ()=> {
    return (<>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Results</Breadcrumb.Item>
        </Breadcrumb>
    </>)
}

export default BreadcrumbCommon;