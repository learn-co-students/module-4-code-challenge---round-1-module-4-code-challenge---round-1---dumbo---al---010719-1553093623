import React, { Component } from "react";
import Book from "../components/Book";

class BookList extends Component {
  
  render() {
    const booksArr = this.props.allBooks.map(book => <Book key={book.title} bookObj={book} container={'all'} moveBook={this.props.moveBook} />)

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <ul>{booksArr}</ul>
      </div>
    );
  }
}

export default BookList;
