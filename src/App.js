import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    bookshelf: []
  }

  submitHandler = (newObj) => {
    this.setState({
      books: [newObj, ...this.state.books]
    })
  }

  addBook = (bookObj) => {
    if (!this.state.bookshelf.includes(bookObj)) {
    this.setState({
      bookshelf: [...this.state.bookshelf, bookObj]
    })
  }
  }

  removeBook = (bookObj) => {
    let newArr = [...this.state.bookshelf]
    let filteredArr = newArr.filter((book)=> {return book !== bookObj})
    this.setState({ bookshelf: filteredArr})
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then(res => res.json())
    .then(json => this.setState({ books: json}))
  }

  render() {
    return (
      <div className="book-container">
        <BookList submitHandler={this.submitHandler} click={this.addBook} books={this.state.books}/>
        <Bookshelf click={this.removeBook} books={this.state.bookshelf}/>
      </div>
    );
  }
}

export default App;
