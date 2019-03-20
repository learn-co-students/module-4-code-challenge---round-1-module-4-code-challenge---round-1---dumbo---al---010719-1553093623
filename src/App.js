import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    allBooks: [],
    bookShelf: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3005/books')
      .then(resp => resp.json())
      .then(books => this.setState({allBooks: books}))
  }

  handleClickBookList = (book) => {
    let foundBook = [...this.state.bookShelf].find(bookObj => bookObj.title === book.title)
    console.log(foundBook);
    if(!foundBook) {
      this.setState({
        bookShelf: [book, ...this.state.bookShelf]
      })
    }
  }

  handleClickBookShelf = (book) => {
    let filterBookShelf = [...this.state.bookShelf].filter(bookObj => bookObj.title !== book.title)
    this.setState({
      bookShelf: filterBookShelf
    })
  }

  handleSubmitBook = (book) => {
    this.setState({
      allBooks: [book, ...this.state.allBooks]
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="book-container">
        <BookList books={this.state.allBooks} handleClickBook={this.handleClickBookList} handleSubmitBook={this.handleSubmitBook} />
        <Bookshelf books={this.state.bookShelf} handleClickBook={this.handleClickBookShelf} />
      </div>
    );
  }
}

export default App;
