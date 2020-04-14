import React from "react";
import {DatePicker} from "antd";

function onChange(date, dateString) {
    console.log(date, dateString);
}

const DP = () => (
    <DatePicker 
        onChange={onChange} 
        style={{width: 287,height: 34}}
        placeholder="请选择">
    </DatePicker>
)

export default DP;