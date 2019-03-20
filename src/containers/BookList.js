import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  render() {
    let arrayOfBooks= this.props.books.map(book => {
      return <Book key= {book.id} bookObj= {book} onClick={this.props.onClick}/>
    })
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>{arrayOfBooks}</ul>
      </div>
    );
  }
}

export default BookList;
