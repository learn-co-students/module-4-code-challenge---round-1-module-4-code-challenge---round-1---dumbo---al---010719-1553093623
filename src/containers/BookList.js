import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    const arrOfBooks= this.props.books.map(book => <Book handleClick={this.props.handleClick} key={book.title} bookObj={book}/>)
    // console.log("inside booklist",arrOfBooks)
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleSubmit={this.props.handleSubmit}/>
        <ul>{arrOfBooks}</ul>
      </div>
    );
  }
}

export default BookList;
