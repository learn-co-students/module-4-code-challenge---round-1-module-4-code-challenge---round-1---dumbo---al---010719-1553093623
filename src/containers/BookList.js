import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    const bookComponents = this.props.books.map(bookObj => (
      <Book
        key={bookObj.id || bookObj.title}
        book={bookObj}
        handleOnBookClick={this.props.handleOnBookClick}
        bookClicked={this.props.bookClicked}
      />
    ))
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleNewBook={this.props.handleNewBook}/>
        <ul>{bookComponents}</ul>
      </div>
    );
  }
}

export default BookList;
