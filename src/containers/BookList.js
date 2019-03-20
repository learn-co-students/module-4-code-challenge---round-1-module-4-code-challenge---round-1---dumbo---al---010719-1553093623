import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  renderBooksToPage =  () => {
    const newArr = this.props.books.map(book => {
      return <Book key={book.id} bookObj={book} addBookToBookShelf={this.props.addBookToBookShelf} />
      console.log('connected');
    })
    return newArr
  }


  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form createNewBook={this.props.createNewBook}/>
        <ul>{this.renderBooksToPage()}</ul>
      </div>
    );
  }
}

export default BookList;
