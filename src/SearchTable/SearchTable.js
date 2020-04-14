import React , {Component} from "react";
import SearchForm from "./SearchForm/SearchForm";
import ShowTable from "./ShowTable/ShowTable";
import "./SearchTable.css";

const SearchTable = () => (
    <div id="SearchTable">
        <SearchForm></SearchForm>
        <ShowTable></ShowTable>
    </div>
)

export default SearchTable;