import React, { Component } from "react";
import Book from "../components/Book";

class BookList extends Component {
  render() {
    console.log("BookList props:", this.props)
    let books= this.props.books.map(book =>
    <Book key={book.id} book={book} clickHandler={this.props.clickHandler}/>)
    return (
      <div className="book-list">
        <h1>Book List</h1>
        {books}
      </div>
    );
  };
};

export default BookList;
