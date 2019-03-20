import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {


  render() {
    const books = this.props.books.map(bookObj => <Book key={bookObj.id} book={bookObj} handleClickBook={this.props.handleClickBook} />)
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleSubmitBook={this.props.handleSubmitBook} />
        <ul>{books}</ul>
      </div>
    );
  }
}

export default BookList;
