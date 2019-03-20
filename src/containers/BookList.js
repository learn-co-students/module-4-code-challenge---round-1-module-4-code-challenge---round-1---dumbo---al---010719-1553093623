import React, { Component } from "react";
import Book from "../components/Book";

class BookList extends Component {
  render() {

    let arrayOfBookCards = this.props.books.map(bookObj => <Book key={bookObj.id} book={bookObj} clickHandler={this.props.clickHandler}/>)

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <ul>{arrayOfBookCards}</ul>
      </div>
    );
  }
}

export default BookList;
