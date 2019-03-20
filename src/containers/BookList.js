import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    const bookArray = this.props.bookObj.map(book => (<Book onClickAdd ={()=> this.props.onClickAdd(this.props.addBook)} bookObj={book}/>))
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form/>
        <ul>{bookArray}</ul>
      </div>
    );
  }
}

export default BookList;
