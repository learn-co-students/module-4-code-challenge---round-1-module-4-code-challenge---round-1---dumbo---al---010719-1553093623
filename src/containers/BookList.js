import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";


class BookList extends Component {

  render() {
    let arrayOfBooks = this.props.books.map(bookObj =>
    <Book key={bookObj.id} book={bookObj} bookHandler={this.props.bookHandler} />)
    return (
      <div className="book-list">
        <h1>Book List</h1>
          <Form handleSubmit={this.props.handleSubmit}/>
        <ul>
          {arrayOfBooks}
        </ul>
      </div>
    );
  }
}

export default BookList;
