import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state={
    allBooks: [],
    shelf:[]
  }

componentDidMount(){
  fetch("http://localhost:3005/books")
  .then(resp=>resp.json())
  .then(books => this.setState({
    allBooks: books
  }))
}

  handleSubmit = (e, book) => {
    // console.log(book);
    e.preventDefault();
    this.setState({
      allBooks:[book, ...this.state.allBooks]
    })
  }

  handleClick = (e) => {
    console.log(e);
    let newBooks = [...this.state.allBooks].filter(book => book !== e)
    this.setState({
      allBooks: newBooks,
      shelf: [e, ...this.state.shelf]
    })
  }

  handleShelfClick = (e) => {
    let newBooks = [...this.state.shelf].filter(book => book !== e)
    this.setState({
      allBooks: [e, ...this.state.allBooks],
      shelf: newBooks
    })
  }




  render() {
    console.log(this.state.allBooks);
    console.log(this.state.shelf);
    return (
      <div className="book-container">
        <BookList allBooks ={this.state.allBooks} handleSubmit={this.handleSubmit} handleClick={this.handleClick}/>
        <Bookshelf allBooks ={this.state.shelf} handleClick={this.handleShelfClick}/>
      </div>
    );
  }
}

export default App;
