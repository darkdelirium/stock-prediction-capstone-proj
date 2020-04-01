import React, { Component } from "react";
import { connect } from "react-redux";
import Results from "./results.js";
import HeaderCommon from "./common/header.js";
import FooterCommon from "./common/footer.js";
import BreadcrumbCommon from "./common/breadcrumb.js";
import { Layout, Tabs } from 'antd';

const { TabPane } = Tabs;

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

import 'antd/dist/antd.css';
import '../style.css';
import Axios from "axios";

import { getDayFromWeek } from "@amcharts/amcharts4/.internal/core/utils/Utils";

const { Header, Content, Footer } = Layout;


const ttestdata = [ {
  key: 1,
  date : "2015-03-02",
  open : 129.25,
  high : 130.28,
  low : 128.3,
  close : 129.09,
  adjClose : 119.44,
  volume : 4.80967E7,
  unadjustedVolume : 4.80967E7,
  change : 0.16,
  changePercent : 0.124,
  vwap : 129.22333,
  label : "March 02, 15",
  changeOverTime : 0.00124
}, {
  key: 2,
  date : "2015-03-03",
  open : 128.96,
  high : 129.52,
  low : 128.09,
  close : 129.36,
  adjClose : 119.69,
  volume : 3.78163E7,
  unadjustedVolume : 3.78163E7,
  change : -0.4,
  changePercent : -0.31,
  vwap : 128.99,
  label : "March 03, 15",
  changeOverTime : -0.0031
}];

const testdata = [ {
    "key": 1,
    "date" : "2015-03-02",
    "open" : 129.25,
    "high" : 130.28,
    "low" : 128.3,
    "close" : 129.09,
    "adjClose" : 119.44,
    "volume" : 4.80967E7,
    "unadjustedVolume" : 4.80967E7,
    "change" : 0.16,
    "changePercent" : 0.124,
    "vwap" : 129.22333,
    "label" : "March 02, 15",
    "changeOverTime" : 0.00124
  }, {
    "key": 2,
    "date" : "2015-03-03",
    "open" : 128.96,
    "high" : 129.52,
    "low" : 128.09,
    "close" : 129.36,
    "adjClose" : 119.69,
    "volume" : 3.78163E7,
    "unadjustedVolume" : 3.78163E7,
    "change" : -0.4,
    "changePercent" : -0.31,
    "vwap" : 128.99,
    "label" : "March 03, 15",
    "changeOverTime" : -0.0031
  }, {
    "key": 3,
    "date" : "2015-03-04",
    "open" : 129.1,
    "high" : 129.56,
    "low" : 128.32,
    "close" : 128.54,
    "adjClose" : 118.93,
    "volume" : 3.16663E7,
    "unadjustedVolume" : 3.16663E7,
    "change" : 0.56,
    "changePercent" : 0.434,
    "vwap" : 128.80667,
    "label" : "March 04, 15",
    "changeOverTime" : 0.00434
  }, {
    "key": 4,
    "date" : "2015-03-05",
    "open" : 128.58,
    "high" : 128.75,
    "low" : 125.76,
    "close" : 126.41,
    "adjClose" : 116.96,
    "volume" : 5.65171E7,
    "unadjustedVolume" : 5.65171E7,
    "change" : 2.17,
    "changePercent" : 1.688,
    "vwap" : 126.97333,
    "label" : "March 05, 15",
    "changeOverTime" : 0.01688
  }, {
    "key": 5,
    "date" : "2015-03-06",
    "open" : 128.4,
    "high" : 129.37,
    "low" : 126.26,
    "close" : 126.6,
    "adjClose" : 117.13,
    "volume" : 7.28421E7,
    "unadjustedVolume" : 7.28421E7,
    "change" : 1.8,
    "changePercent" : 1.402,
    "vwap" : 127.41,
    "label" : "March 06, 15",
    "changeOverTime" : 0.01402
  }, {
    "key": 6,
    "date" : "2015-03-09",
    "open" : 127.96,
    "high" : 129.57,
    "low" : 125.06,
    "close" : 127.14,
    "adjClose" : 117.63,
    "volume" : 8.85285E7,
    "unadjustedVolume" : 8.85285E7,
    "change" : 0.82,
    "changePercent" : 0.641,
    "vwap" : 127.25667,
    "label" : "March 09, 15",
    "changeOverTime" : 0.00641
  }, {
    "key": 7,
    "date" : "2015-03-10",
    "open" : 126.41,
    "high" : 127.22,
    "low" : 123.8,
    "close" : 124.51,
    "adjClose" : 115.2,
    "volume" : 6.88566E7,
    "unadjustedVolume" : 6.88566E7,
    "change" : 1.9,
    "changePercent" : 1.503,
    "vwap" : 125.17667,
    "label" : "March 10, 15",
    "changeOverTime" : 0.01503
  }, {
    "key": 8,
    "date" : "2015-03-11",
    "open" : 124.75,
    "high" : 124.77,
    "low" : 122.11,
    "close" : 122.24,
    "adjClose" : 113.1,
    "volume" : 6.8939E7,
    "unadjustedVolume" : 6.8939E7,
    "change" : 2.51,
    "changePercent" : 2.012,
    "vwap" : 123.04,
    "label" : "March 11, 15",
    "changeOverTime" : 0.02012
  }, {
    "key": 9,
    "date" : "2015-03-12",
    "open" : 122.31,
    "high" : 124.9,
    "low" : 121.63,
    "close" : 124.45,
    "adjClose" : 115.14,
    "volume" : 4.83627E7,
    "unadjustedVolume" : 4.83627E7,
    "change" : -2.14,
    "changePercent" : -1.75,
    "vwap" : 123.66,
    "label" : "March 12, 15",
    "changeOverTime" : -0.0175
  }, {
    "key": 10,
    "date" : "2015-03-13",
    "open" : 124.4,
    "high" : 125.4,
    "low" : 122.58,
    "close" : 123.59,
    "adjClose" : 114.35,
    "volume" : 5.18273E7,
    "unadjustedVolume" : 5.18273E7,
    "change" : 0.81,
    "changePercent" : 0.651,
    "vwap" : 123.85667,
    "label" : "March 13, 15",
    "changeOverTime" : 0.00651
  }, {
    "key": 11,
    "date" : "2015-03-16",
    "open" : 123.88,
    "high" : 124.95,
    "low" : 122.87,
    "close" : 124.95,
    "adjClose" : 115.61,
    "volume" : 3.58743E7,
    "unadjustedVolume" : 3.58743E7,
    "change" : -1.07,
    "changePercent" : -0.864,
    "vwap" : 124.25667,
    "label" : "March 16, 15",
    "changeOverTime" : -0.00864
  }, {
    "key": 12,
    "date" : "2015-03-17",
    "open" : 125.9,
    "high" : 127.32,
    "low" : 125.65,
    "close" : 127.04,
    "adjClose" : 117.54,
    "volume" : 5.10231E7,
    "unadjustedVolume" : 5.10231E7,
    "change" : -1.14,
    "changePercent" : -0.905,
    "vwap" : 126.67,
    "label" : "March 17, 15",
    "changeOverTime" : -0.00905
  }, {
    "key": 13,
    "date" : "2015-03-18",
    "open" : 127.0,
    "high" : 129.16,
    "low" : 126.37,
    "close" : 128.47,
    "adjClose" : 118.86,
    "volume" : 6.52709E7,
    "unadjustedVolume" : 6.52709E7,
    "change" : -1.47,
    "changePercent" : -1.157,
    "vwap" : 128.0,
    "label" : "March 18, 15",
    "changeOverTime" : -0.01157
  }, {
    "key": 14,
    "date" : "2015-03-19",
    "open" : 128.75,
    "high" : 129.25,
    "low" : 127.4,
    "close" : 127.5,
    "adjClose" : 117.96,
    "volume" : 4.58095E7,
    "unadjustedVolume" : 4.58095E7,
    "change" : 1.25,
    "changePercent" : 0.971,
    "vwap" : 128.05,
    "label" : "March 19, 15",
    "changeOverTime" : 0.00971
  }, {
    "key": 15,
    "date" : "2015-03-20",
    "open" : 128.25,
    "high" : 128.4,
    "low" : 125.16,
    "close" : 125.9,
    "adjClose" : 116.48,
    "volume" : 6.86951E7,
    "unadjustedVolume" : 6.86951E7,
    "change" : 2.35,
    "changePercent" : 1.832,
    "vwap" : 126.48667,
    "label" : "March 20, 15",
    "changeOverTime" : 0.01832
  }, {
    "key": 16,
    "date" : "2015-03-23",
    "open" : 127.12,
    "high" : 127.85,
    "low" : 126.52,
    "close" : 127.21,
    "adjClose" : 117.7,
    "volume" : 3.77097E7,
    "unadjustedVolume" : 3.77097E7,
    "change" : -0.09,
    "changePercent" : -0.071,
    "vwap" : 127.19333,
    "label" : "March 23, 15",
    "changeOverTime" : -7.1E-4
  }, {
    "key": 17,
    "date" : "2015-03-24",
    "open" : 127.23,
    "high" : 128.04,
    "low" : 126.56,
    "close" : 126.69,
    "adjClose" : 117.22,
    "volume" : 3.28423E7,
    "unadjustedVolume" : 3.28423E7,
    "change" : 0.54,
    "changePercent" : 0.424,
    "vwap" : 127.09667,
    "label" : "March 24, 15",
    "changeOverTime" : 0.00424
  }, {
    "key": 18,
    "date" : "2015-03-25",
    "open" : 126.54,
    "high" : 126.82,
    "low" : 123.38,
    "close" : 123.38,
    "adjClose" : 114.15,
    "volume" : 5.16552E7,
    "unadjustedVolume" : 5.16552E7,
    "change" : 3.16,
    "changePercent" : 2.497,
    "vwap" : 124.52667,
    "label" : "March 25, 15",
    "changeOverTime" : 0.02497
  }];

const headers = [
    {
      "title": "Date",
      "dataIndex": "date"
    },
    {
      "title": "Open",
      "dataIndex": "open"
    },
    {
      "title": "High",
      "dataIndex": "high"
    },
    {
      "title": "Low",
      "dataIndex": "low"
    }
  ];

  const headersPredicted = [
    {
      "title": "Day",
      "dataIndex": "day"
    },
    {
      "title": "Predicted Value",
      "dataIndex": "value"
    },
    {
      "title": "Real Value",
      "dataIndex": "real"
    }
  ];
class App extends Component {

  generateData = (jsonInput={}) => {
    console.log("generateData Called", jsonInput)
    console.log(jsonInput)
    const newArr= []
    if (Object.entries(jsonInput).length !== 0) {
      jsonInput.y_pred_values.forEach((item, i)=> {newArr.push({value: item, real:jsonInput.y_real_values[i], day: ++i})})
 //   jsonInput.y_real_values.foreach((item, i)=> {newObj.y_real_values.push({value: item, day: ++i})})
    return newArr
    }
    else return []
  }

  fetchData = async() => {
    const data = await Axios.get("https://financialmodelingprep.com/api/v3/historical-price-full/GE");
    console.log (data.data);
    //this.props.onValueChange({reference: data.data});
    console.log("onvaluechange",this.props.onValueChange)
    this.props.onValueChange(data.data)

    const predicted = await Axios.get("http://127.0.0.1:5000/predicted_stock_values")
    console.log("predicted", predicted.data)
    this.props.onGetPredicted(predicted.data)
  }

  componentDidMount() {
    this.fetchData();
//    setTimeout(console.log(this.props.testValue.historical),100000);
    let locator = this.props.location.pathname;
    console.log(`DEBUG handle ${locator}`);

    let originalDataChart = am4core.create("originaldata", am4charts.XYChart);
    originalDataChart.numberFormatter.numberFormat = "#.";
    originalDataChart.dateFormatter.numberFormat = "#."
    originalDataChart.paddingRight=20;
    originalDataChart.data=this.props.testValue.reference.historical||[];
    let dateAxisO = originalDataChart.xAxes.push(new am4charts.DateAxis());
    dateAxisO.renderer.grid.template.location = 0;

    let valueAxisO = originalDataChart.yAxes.push(new am4charts.ValueAxis());
    valueAxisO.tooltip.disabled = true;
    valueAxisO.renderer.minWidth = 35;

    let seriesO = originalDataChart.series.push(new am4charts.LineSeries());
    seriesO.name = "High";
    seriesO.dataFields.valueX = "date";
    //yAxis.numberFormatter.numberFormat = "#.##";
    seriesO.dataFields.valueY = "high";

    seriesO.tooltipText = "{valueY.value}";
    originalDataChart.cursor = new am4charts.XYCursor();

    //series 2
    let series2O = originalDataChart.series.push(new am4charts.LineSeries());
    series2O.name = "Low";
    series2O.stroke = am4core.color("#CDA2AB");
    series2O.dataFields.valueX = "date";
    series2O.dataFields.valueY = "low";


    /*let scrollbarXO = new am4charts.XYChartScrollbar();
    scrollbarXO.series.push(seriesO);
    scrollbarXO.series.push(series2O);

    originalDataChart.scrollbarXO = scrollbarXO;
 */
    this.originalDataChart = originalDataChart;
   
  //========================

    let chart = am4core.create("chartdiv", am4charts.XYChart);

    chart.paddingRight = 20;

    const newData=this.generateData(this.props.testValue.predicted);
    this.props.onProceedResult(newData)
    console.log("component did mount newData", newData)
    //chart.data=testdata;
    chart.data=this.props.testValue.predictedResults||[];
   // chart.data=this.props.testValue.historical||[];
    //chart.data=this.props.testValue.predicted||[];
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    let series = chart.series.push(new am4charts.LineSeries());
    series.name = "Predict";
    series.dataFields.dateX = "day";
    series.dataFields.valueY = "value";

    series.tooltipText = "{valueY.value}";
    chart.cursor = new am4charts.XYCursor();
//series 2
    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.name = "Real";
    series2.stroke = am4core.color("#CDA2AB");
    series2.dataFields.dateX = "day";
    series2.dataFields.valueY = "real";


    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    scrollbarX.series.push(series2);

    chart.scrollbarX = scrollbarX;

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  componentDidUpdate(oldProps) {
    if (oldProps.testValue.reference.historical !== this.props.testValue.reference.historical) {
      this.originalDataChart.data=this.props.testValue.reference.historical;
    }
    if (oldProps.testValue.predicted !== this.props.testValue.predicted) {
      const newData=this.generateData(this.props.testValue.predicted);
      this.props.onProceedResult(newData)
      console.log("componentDidUpdate newData", newData)
      
    }
    if (oldProps.testValue.predictedResults !== this.props.testValue.predictedResults) {
      this.chart.data=this.props.testValue.predictedResults;
      console.log("updated chart", this.chart.data)
    }
  }

  render() {
    //console.log("real",this.props.testValue.currentValue.reference)
    //const currentValue = this.props.testValue.currentValue.reference;
    return (
      <React.Fragment>
        <Layout className="layout">
      <HeaderCommon currentUrl={this.props.location.pathname} />
    <Content style={{ padding: '0 50px' }}>
      <BreadcrumbCommon />
      <div className="site-layout-content">
        <Tabs defaultActiveKey="1" >
          <TabPane tab="Predicted" key="1" forceRender="true">
            <Results headers={headersPredicted} data={this.props.testValue.predictedResults||[]} amchartId="chartdiv"/>
          </TabPane>
          <TabPane tab="Historical" key="2" forceRender="true">
            <Results headers={headers} data={this.props.testValue.reference.historical||[]}  amchartId="originaldata"/>
          </TabPane>
        </Tabs>
      </div>
    </Content>
    <FooterCommon />
  </Layout>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({ testValue: state.testValue }),

  dispatch => ({
    onValueChange: newValue => {
      dispatch({ type: "CHANGE_VALUE", payload: newValue });
    },
    onGetPredicted: newValue => {
      dispatch({ type: "GET_PREDICTED", payload: newValue });
    },
    onProceedResult: newValue=> {
      dispatch({type: "ON_PROCCED_RESULTS", payload: newValue})
    }
  })
)(App);
