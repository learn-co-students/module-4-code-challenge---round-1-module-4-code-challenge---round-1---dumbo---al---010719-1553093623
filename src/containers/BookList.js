import React, { Component } from "react";
import Book from "../components/Book";

class BookList extends Component {
  render() {
    const bookList = this.props.books.map(books => (
      <Book
        key={books.id}
        books={books}
        clickHandler={this.props.clickHandler}
      />
    ));
    return (
      <div className="book-list">
        <h1>Book List</h1>

        <ul>{bookList}</ul>
      </div>
    );
  }
}

export default BookList;
