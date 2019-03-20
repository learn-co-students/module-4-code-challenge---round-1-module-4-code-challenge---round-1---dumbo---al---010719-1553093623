import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    addBooks: [],
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then(resp => resp.json())
    .then(books => this.setState( { books } ))
  }

  handleClick = (bookObj) => {
    this.setState( { addBooks: [...this.state.addBooks, bookObj] } )
  }



  removeHandle = (bookObj) => {
    const newBookArray = [...this.state.addBooks]
    const filterBooks = newBookArray.filter(book => book.id !== bookObj.id)
    this.setState( { addBooks: filterBooks } )
  }



  render() {
    console.log(this.state) //-----> check state
    const { books, addBooks } = this.state
    return (
      <div className="book-container">
        <BookList handleSubmit={ this.handleSubmit } handleClick={ this.handleClick } books={ books }  />
        <Bookshelf addBooks={ addBooks } handleClick={ this.removeHandle } />
      </div>
    );
  }
}

export default App;
