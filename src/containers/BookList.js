import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    const {books, form, action} = this.props;
    // console.log(this.props)
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handler={form}/>
        <ul className="books__list">{books.map(singleBook => <Book key={singleBook.id} book={singleBook} action={action}/>)}</ul>
      </div>
    );
  }
}

export default BookList;
