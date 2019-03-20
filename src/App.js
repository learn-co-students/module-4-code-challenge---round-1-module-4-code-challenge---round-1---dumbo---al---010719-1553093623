import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state={
    books: [],
    myBooks: []
  }

  componentDidMount(){
    fetch('http://localhost:3005/books').then(resp => resp.json())
    .then(json => this.setState({ books: json },
      console.log("Books are fetched.") )
    )
  }

  handleAdd = (book) => {
    this.setState({
      books: this.state.books.filter(books => books.id !== book.id),
      myBooks: [book, ...this.state.myBooks] },
      console.log(`Added "${book.title}" to my book shelf.`)
    )
  }

  handleReturn = (book) => {
    this.setState({
      myBooks: this.state.myBooks.filter(books => books.id !== book.id),
      books: [book, ...this.state.books] },
      console.log(`Returned "${book.title}" to the book list`)
    )
  }

  handleSubmit = (event, book) => {
    event.preventDefault()
    console.log(`Submitting "${book.title}" by ${book.author} with "${book.img}"`)
    this.setState({
      books: [book, ...this.state.books] },
      console.log(`Added "${book.title}" to the book list.`)
    )
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} handleClick={this.handleAdd} handleSubmit={this.handleSubmit}/>
        <Bookshelf books={this.state.myBooks} handleClick={this.handleReturn}/>
      </div>
    );
  }
}

export default App;
