import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    books: [],
    shelvedBooks: []
  };

  componentDidMount() {
    fetch("http://localhost:3005/books")
      .then(resp => resp.json())
      .then(books => this.setState({ books: books }));
  }

  handleClickAddBookToShelf = bookObj => {
    this.setState({
      // books: [...this.state.books].filter(book => book.id !== bookObj.id),
      shelvedBooks: [bookObj, ...this.state.shelvedBooks]
    });
  };

  handleClickRemoveBookFromShelf = bookObj => {
    this.setState({
      // shelvedBooks: [...this.state.shelvedBooks].filter(
      //   book => book.id !== bookObj.id
      // ),
      books: [bookObj, ...this.state.books]
    });
  };

  handleSubmit = bookObj => {
    this.setState({ books: [bookObj, ...this.state.books] });
  };

  render() {
    console.log("App.state", this.state);
    return (
      <div className="book-container">
        <BookList
          books={this.state.books}
          handleClick={this.handleClickAddBookToShelf}
          handleSubmit={this.handleSubmit}
        />
        <Bookshelf
          books={this.state.shelvedBooks}
          handleClick={this.handleClickRemoveBookFromShelf}
        />
      </div>
    );
  }
}

export default App;
