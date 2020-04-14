import React , {Component} from "react";
import SelectInput from "./SelectInput";
import DatePicker from "./DatePicker";
import {Button} from "antd";
import "./SearchFrom.css";

const SearchForm = () => (
    <form>
        <label>名称：</label>
        <SelectInput></SelectInput>
        <label id="TimeLabel">时间：</label>
        <DatePicker></DatePicker>
        <Button type="primary" id="SearchButton" style={{width: 63,height: 34}}>查询</Button>
    </form>
)

export default SearchForm;