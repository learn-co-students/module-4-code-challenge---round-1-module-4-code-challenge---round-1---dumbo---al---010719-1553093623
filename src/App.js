import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    books: [],
    bookshelf: []
  }

  componentDidMount() {
    fetch("http://localhost:3005/books")
      .then(res => res.json())
      .then(books => this.setState({books}))
  }

  handleOnBookClick = (book, bookClicked) => {
    if (bookClicked) {
      this.setState({bookshelf: this.state.bookshelf.filter(bookObj => bookObj.id !== book.id)})
    } else {
      if (this.state.bookshelf.map(bookObj => bookObj.title).includes(book.title)) {
        return;
      } else {
        this.setState({bookshelf: [...this.state.bookshelf, book]})
      }
    }
  }

  handleNewBook = (newBook) => {
    this.setState({books: [newBook, ...this.state.books]})
  }

  render() {
    return (
      <div className="book-container">
        <BookList
          books={this.state.books}
          handleOnBookClick={this.handleOnBookClick}
          handleNewBook={this.handleNewBook}
          bookClicked={false}
        />
        <Bookshelf bookshelf={this.state.bookshelf} handleOnBookClick={this.handleOnBookClick} bookClicked={true}/>
      </div>
    );
  }
}

export default App;
