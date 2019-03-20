import React, { Component } from "react";
import Book from "../components/Book";


class BookList extends Component {
  render() {

      let bookList = this.props.books.map(bookObj => <Book book={bookObj} key={bookObj.id} clickHandler={this.props.clickHandler}/>)
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <ul>{bookList}</ul>
      </div>
    );
  }
}

export default BookList;
