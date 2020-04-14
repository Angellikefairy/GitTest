import React , {Component} from "react";
import {ConfigProvider} from "antd";
import zhCN from 'antd/es/locale/zh_CN';
import SearchTable from "./SearchTable/SearchTable";
import "./App.css"


const App = () => (
  <ConfigProvider locale={zhCN}>
    <div id="App">
      <h1 id="title">查询表格</h1>
      <SearchTable></SearchTable>
    </div>
  </ConfigProvider>
)

export default App;

