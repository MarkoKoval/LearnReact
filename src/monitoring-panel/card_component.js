import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
 // items_in_row = { 1:"col-sm-12",2: "col-sm-6", 3 :"col-sm-4",4 : "col-sm-3", 5:"col-sm-2"}
class CardC extends Component {
/*<div className="col-sm-12">*/
     render(){

    return <div className= { this.props.columms_ } >
           <div className="card card_style" >
      <div className="card-body">
        <h4 className="card-title">{this.props.chat_name_}</h4>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Show chat</a>
      </div>
    </div>
      </div>;

  }

}

export default CardC;