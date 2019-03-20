import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state ={
    bookList: [],
    bookShelf: []

  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then(res => res.json())
    .then(books => this.setState({
      bookList: books
    }))
  }

  handleAdd = (bookInfo) => {
    if (!this.state.bookShelf.includes(bookInfo)){
      this.setState({
      bookShelf:[bookInfo,...this.state.bookShelf]
      })
    }
  }

  handleRemove = (bookInfo) => {
    this.setState({
      bookShelf: this.state.bookShelf.filter(book => book !== bookInfo)
    })
  }

  AddBooktoList = (bookInfo) => {
    this.setState({
      bookList: [bookInfo, ...this.state.bookList]
    })
  }

  render() {
    return (
      <div className="book-container">
        <BookList bookList={this.state.bookList} handleAdd={this.handleAdd} AddBooktoList={this.AddBooktoList}/>
        <Bookshelf bookShelf={this.state.bookShelf} handleRemove={this.handleRemove}/>
      </div>
    );
  }
}

export default App;
