import React from "react";
import {Table} from "antd";

const Results =({headers, data, amchartId})=> {
  console.log("amcharts id", amchartId)
  return(<>
      <h1>GE Stock values</h1>
      <div id={amchartId} style={{ width: "100%", height: "500px" }}></div>
      <Table columns={headers} dataSource={data} />
    </>)
}

export default Results;