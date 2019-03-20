import React from "react";
import Book from "../components/Book";

class Bookshelf extends React.Component{
// i need a ternary to either show the book on the bookshelf if clicked book doesn't match this.state.singleBook otherwise if it does match null
  render(){
    return (
    <div className="book-shelf">
      <h1>Book Shelf</h1>
      <ul>
      <Book handleClick={this.props.handleClick} key={this.props.book.id} bookData={this.props.book}/>
      </ul>
    </div>
    );
  }
};

export default Bookshelf;
