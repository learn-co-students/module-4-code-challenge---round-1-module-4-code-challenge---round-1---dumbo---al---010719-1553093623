import React, { Component } from "react";
import Book from "../components/Book";


class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <ul>{
          this.props.books.length === 0 ? "There are no books left to borrow!" :
          this.props.books.map(book => <Book key={book.id}
          book={book}
          handleClick={this.props.handleClick}/> )
        }
        </ul>
      </div>
    );
  }
}

export default BookList;
