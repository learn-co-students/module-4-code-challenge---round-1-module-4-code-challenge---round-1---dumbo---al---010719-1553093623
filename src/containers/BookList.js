import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    const { books } = this.props
    const renderBooks = books.map(bookObj => <Book handleClick={this.props.handleClick} key={ bookObj.id } book={ bookObj } />)
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form book={ books } />
        <ul>{ renderBooks }</ul>
      </div>
    );
  }
}

export default BookList;
