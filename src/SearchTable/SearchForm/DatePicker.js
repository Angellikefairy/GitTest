import React from "react";
import {DatePicker} from "antd";

const DP = (props) => {
    function onChange(date, dateString) {
        props.setDatePick(dateString);
    }
    return (
        <DatePicker 
            onChange={onChange} 
            style={{width: 287,height: 34}}
            placeholder="请选择">
        </DatePicker>
    )
}

export default DP;