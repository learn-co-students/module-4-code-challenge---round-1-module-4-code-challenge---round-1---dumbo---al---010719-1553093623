import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";
import '../index.css'

class BookList extends Component {
  render() {
    console.log(this.props.books)
    let arrBooks = this.props.books.map(book => <Book book={book} handleShelf={this.props.handleShelf}/>)
    return (
      <div className="left">
        <h1>Book List</h1>
        <Form addBook={this.props.addBook}/>
        <ul>{arrBooks}</ul>
      </div>
    );
  }
}

export default BookList;
