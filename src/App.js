import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    books: [],
    shelf: []
  }

  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(resp => resp.json())
    .then(json => this.setState({books: json}))
  }

  addBook = (event, book) => {
    event.preventDefault()
    let copyBooks = [book,...this.state.books]
    this.setState({books: copyBooks})
  }

  addShelf = (book) => {
    let copyShelf = [...this.state.shelf]
    if(copyShelf.find(bookObj => bookObj.id === book.id )){
    }else{
      copyShelf.unshift(book)
      this.setState({shelf: copyShelf})
    }
  }

  removeShelf = (book) => {
    let copyShelf = [...this.state.shelf].filter(bookObj => bookObj.id !== book.id)
    this.setState({shelf: copyShelf})
  }

  render() {
    console.log(this.state.shelf)
    return (
      <div className="book-container">
        <BookList books={this.state.books} addBook={this.addBook} handleShelf={this.addShelf}/>
        <Bookshelf books={this.state.shelf} handleShelf={this.removeShelf}/>
      </div>
    );
  }
}

export default App;
