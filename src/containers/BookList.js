import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    let booksArr = this.props.books.map((book) => { return <Book click={this.props.click} oneBook={book}/>})
    return (
      <div className="book-list">
        <Form submitHandler={this.props.submitHandler}/>
        <ul>{booksArr}</ul>
      </div>
    );
  }
}

export default BookList;
