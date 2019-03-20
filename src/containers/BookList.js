import React, { Component } from "react";
import Book from "../components/Book";

class BookList extends Component {

  renderBook = book=>{
    return <Book key={book.id} bookData={book} handleClick={this.props.handleClick}/>
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <ul>{this.props.books.map(this.renderBook)}</ul>
      </div>
    );
  }
}

export default BookList;
