import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {



  render() {
    const arrayOfBookListBooks = this.props.bookList.map(bookInfo => <Book handleClick={this.props.handleAdd} bookInfo={bookInfo} />)

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form AddBooktoList={this.props.AddBooktoList}/>
        <ul>{arrayOfBookListBooks}</ul>
      </div>
    );
  }
}

export default BookList;
