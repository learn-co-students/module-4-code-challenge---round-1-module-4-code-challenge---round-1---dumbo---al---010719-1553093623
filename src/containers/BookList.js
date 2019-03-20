import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    let books = this.props.allBooks.map(book => <li><Book book={book} handleClick={this.props.handleClick}/></li>)
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleSubmit={this.props.handleSubmit}/>
        <ul>{books}</ul>
      </div>
    );
  }
}

export default BookList;
