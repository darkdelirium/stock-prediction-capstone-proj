import React from "react";
import {Table} from "antd";

const Results =({headers, data})=> {
    return(<>
    <div className="site-layout-content">
      <h1>AAPL Stock values</h1>
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
      <Table columns={headers} dataSource={data} />

      </div>
    </>)
}

export default Results;