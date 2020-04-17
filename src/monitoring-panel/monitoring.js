import React, { Component } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardC from "./card_component";
import SearchC from "./search_component"

const   items_in_row = { 1:"col-sm-12",2: "col-sm-6", 3 :"col-sm-4",4 : "col-sm-3", 6:"col-sm-2"}
class Monitoring extends Component {
  constructor() {
    super();
    this.state = {
      column_count : 3,
      search_query: "",
      initialItems : [
        "Apples",
        "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
        "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
        "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
        "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Apples",
          "Orange",
          "Juice"
      ],
      items: []
    };

    this.filterList = this.filterList.bind(this);

  }

  componentWillMount(){
    this.setState({
      items: this.state.initialItems
    });
  }

  filterList(e){
    let updateList = this.state.initialItems;
    updateList = updateList.filter(item => {

      return item.toLowerCase().search( e.target.value.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&").toLowerCase() ) !== -1;
    });

    this.setState({
      items: updateList
    });
  }


  handleSearchQueryChange = query => {
   // alert(query);
    let updateList = this.state.initialItems;
    updateList = updateList.filter(item => {

      return item.toLowerCase().search( query.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&").toLowerCase() ) !== -1;
    });

    this.setState({
      items: updateList,
      search_query: query
    });
    // this.setState({ name })
  }

  HandleSelectChange = query => {
     this.setState({column_count:query} );
  }

  render() {
    return (
        <React.Fragment>
          <SearchC search_query ={this.state.search_query} column_count = {this.state.column_count} onSearchQueryChange={this.handleSearchQueryChange}
          onSelectChange = {this.HandleSelectChange} />
        <div className="row">
         {this.state.items.map(item => {
    return  <CardC columms_ =  {items_in_row[this.state.column_count]}  chat_name_ = {item} />

           })}
        </div>
           </React.Fragment>
    )

  }

}

export default Monitoring ;