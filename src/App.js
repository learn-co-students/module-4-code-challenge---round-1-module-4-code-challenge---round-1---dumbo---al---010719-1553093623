import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";


class App extends Component {
  state = {
    books: [],
    bookShelf: []
  }

  componentDidMount(){
    fetch("http://localhost:3005/books").then(resp => resp.json()).then(resp => {
      this.setState({books: resp})
    })
  }

  bookClick = (book) => {
    let newBooks = [...this.state.books].filter(bookElem => bookElem !== book);
    this.setState({
      bookShelf: [book, ...this.state.bookShelf],
      books: newBooks
    })
  }

  bookDelete = (book) => {
    let newBooks = [...this.state.bookShelf].filter(bookElem => bookElem !== book);
    this.setState({
      bookShelf: newBooks,
      books: [book, ...this.state.books]
    })
  }

  formSubmit = (book) => {
    this.setState({
      books: [book, ...this.state.books]
    })
  }

  render() {
    console.log("state", this.state.books);
    return (
      <div className="book-container">
        <BookList books={this.state.books} bookClick={this.bookClick} formSubmit={this.formSubmit}/>
        <Bookshelf bookShelf={this.state.bookShelf} bookClick={this.bookDelete}/>
      </div>
    );
  }
}

export default App;
