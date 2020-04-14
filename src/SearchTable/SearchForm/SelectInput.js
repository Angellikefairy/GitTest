import React , {Component} from "react";
import {Select} from "antd";
import data from "../../Data";

const {Option} = Select;

function onChange(value) {
  }
  
  function onBlur() {
  }
  
  function onFocus() {
  }
  
  function onSearch(val) {
  }

const SelectInput = (props) => {
    function onChange(value) {
        props.setSelectValue(value);
    }
    let options = data.map(item => (
        <Option value={item.name} key={item.key}>{item.name}</Option>
    ))
    return (
        <Select
            showSearch
            style={{ width: 287,height: 34}}
            placeholder="请选择"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            {options}
        </Select>
    )
}

export default SelectInput;