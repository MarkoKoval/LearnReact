import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
 // items_in_row = { 1:"col-sm-12",2: "col-sm-6", 3 :"col-sm-4",4 : "col-sm-3", 5:"col-sm-2"}
class SearchC extends Component {


/*<div className="col-sm-12">*/

        handleInputChange = event => {
    this.props.onSearchQueryChange(event.target.value);
     }

     handleColumnSelect = event => {
            this.props.onSelectChange(event.target.value);
     }

     render(){

    return <div className="search-style" >
          <div className="input-group mb-3 ">
        <input id = "search_" type="text" className="form-control" aria-label="Text input with checkbox" placeholder="Search... " value={this.props.search_query} onChange={this.handleInputChange}   />

        <select className="custom-select" id = "select_" value={this.props.column_count} onChange={this.handleColumnSelect} >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="6">Six</option>
        </select>
                 </div>
    </div>;

     }

}

export default SearchC;