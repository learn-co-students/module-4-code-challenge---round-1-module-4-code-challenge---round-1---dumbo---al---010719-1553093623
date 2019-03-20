import React from "react";

class Book extends React.Component{

  render(){
    return (
      <div>
      <h2>{this.props.book.title}</h2>
      <img src={this.props.book.img} onClick={()=>this.props.handleClick(this.props.book)}/>
      </div>
    );
  }
};

export default Book;
