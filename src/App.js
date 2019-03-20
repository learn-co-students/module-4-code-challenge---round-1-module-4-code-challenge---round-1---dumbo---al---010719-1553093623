import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import Form from "./components/Form"

class App extends Component {

  state= {
    booksOnList: [],
    booksOnShelf: []
  }

  componentDidMount(){
    fetch(`http://localhost:3005/books`)
    .then(res => res.json())
    .then(books => this.setState({booksOnList:book}))
  }

  clickHandlerToAddBook = bookObj => {
    console.log("add", bookObj)
    this.setState({
        booksOnList: [...this.state.booksOnList].filter(
          booksOnList => book.id !== bookObj.id
        ),
          booksOnShelf: [bookObj, ...this.state.booksOnShelf]
      });
    };

  clickHandlerToRemoveBook = bookObj => {
    console.log("remove", bookObj)
    this.setState({
    booksOnShelf: [...this.state.booksOnShelf].filter(
      booksOnList => book.id !== bookObj.id
    ),
    booksOnList: [bookObj, ...this.state.booksOnList]
    });
  };

  render() {
    console.log("Books on List:", this.state.booksOnList)
    return (
      <div className="book-container">
        <BookList
          books={this.state.booksOnList}
          clickHandler={this.clickHandlerToAddBook}/>
        <Bookshelf
          books={this.state.booksOnShelf}
          clickHandler={this.clickHandlerToRemoveBook}/>
        <Form/>
      </div>
    );
  }
}

export default App;
