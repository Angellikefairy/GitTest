import React , {Component} from "react";
import {Select} from "antd";

const {Option} = Select;

function onChange(value) {
    console.log(`selected ${value}`);
  }
  
  function onBlur() {
    console.log('blur');
  }
  
  function onFocus() {
    console.log('focus');
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }

const SelectInput = () => (
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
    <Option value="文件夹1">文件夹1</Option>
    <Option value="文件夹2">文件夹2</Option>
    <Option value="文件夹3">文件夹3</Option>
  </Select>
)

export default SelectInput;