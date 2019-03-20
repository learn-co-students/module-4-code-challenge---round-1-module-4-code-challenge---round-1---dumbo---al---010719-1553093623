import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
let url = "http://localhost:3005/books"

class App extends Component {

  state = {
    books: [],
    bookShelves: []
  }

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(books => this.setState({books:books}))
  }

  clickAdd = (bookObj) => {
    let newArr = [...this.state.books]
    let findArr = newArr.filter(book => book.id === bookObj.id)

    this.setState({
      bookShelves: findArr
    })
  }

  clickDelete = () => {
    this.setState({
      bookShelves: []
    })
  }

  handleSubmit = (event, book) => {
    event.preventDefault();
    this.setState({
      books: [book, ...this.state.books]
    })
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} bookHandler={this.clickAdd} handleSubmit={this.handleSubmit}/>
        <Bookshelf books={this.state.bookShelves} bookHandler={this.clickDelete}/>
      </div>
    );
  }
}

export default App;
