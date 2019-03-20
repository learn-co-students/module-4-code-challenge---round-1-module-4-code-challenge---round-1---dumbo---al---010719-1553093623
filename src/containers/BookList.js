import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

    render() {
        console.log("books in bookList", this.props.books)
        let booksArray = this.props.books.map(book => <Book removeFromShelf={this.props.removeFromShelf} addToShelf={this.props.addToShelf} books={book}/>)

        return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleSubmit={this.props.handleSubmit}/>
        <ul>{booksArray}</ul>
      </div>
    );
  }
}

export default BookList;
