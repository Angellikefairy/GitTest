import React , {Component} from "react";
import SelectInput from "./SelectInput";
import DatePicker from "./DatePicker";
import eventBus from "../../EventBus";
import {Button} from "antd";
import "./SearchFrom.css";

class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            selectValue: undefined,
            datePick: undefined
        }
    }

    setSelectValue = (value) => {
        this.setState({
            selectValue: value
        })
    }

    setDatePick = (value) => {
        this.setState({
            datePick: value
        })
    }

    search = (...searchValues) => {
        eventBus.emit('search',...searchValues)
    }

    render() {
        return (
            <form>
                <label>名称：</label>
                <SelectInput setSelectValue={this.setSelectValue}></SelectInput>
                <label id="TimeLabel">时间：</label>
                <DatePicker setDatePick={this.setDatePick}></DatePicker>
                <Button 
                    type="primary" 
                    id="SearchButton" 
                    style={{width: 63,height: 34}} 
                    onClick={()=>this.search(this.state.selectValue,this.state.datePick)}
                    >
                    查询
                </Button>
            </form>
        )
    }
}

export default SearchForm;