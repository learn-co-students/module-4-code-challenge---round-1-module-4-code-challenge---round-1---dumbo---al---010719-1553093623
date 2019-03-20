import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  getAll = () => {
    return this.props.books.map(book => Book(book, this.props.handleAdd))
  }
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form createBook={this.props.createBook}/>
        <ul>
          {this.getAll()}
        </ul>
      </div>
    );
  }
}

export default BookList;
