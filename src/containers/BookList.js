import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    // console.log("BookList.props: ", this.props);
    let books = this.props.books.map(book => (
      <Book key={book.id} book={book} handleClick={this.props.handleClick} />
    ));

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleSubmit={this.props.handleSubmit} />
        {books}
      </div>
    );
  }
}

export default BookList;
