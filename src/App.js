import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import Form from "./components/Form";
const URL = "http://localhost:3005/books";
class App extends Component {
  state = {
    // set state this is your constructor to initalize your values
    books: [],
    favoriteBooks: [],
    searchTerm: ""
  };

  componentDidMount() {
    // use this fetch the list of books from the API
    fetch(URL)
      .then(resp => resp.json())
      .then(books =>
        this.setState({
          books
        })
      );
  }

  removeBookHandler = bookObj => {
    console.log("SUP");
    let removeBook = [...this.state.favoriteBooks].filter(
      book => book.id !== bookObj.id
    );
    this.setState({
      favoriteBooks: removeBook
    });
  };

  addBookHandler = bookObj => {
    console.log("bookies", bookObj);
    let filtered = [...this.state.favoriteBooks, bookObj];
    // if(this.state.favoriteBooks)
    this.setState({
      favoriteBooks: filtered
    });
  };

  submitHandler = booksObj => {
    this.setState({
      books: [booksObj, ...this.state.books]
    });
  };

  render() {
    console.log("STATE", this.state);
    return (
      <div className="book-container">
        <Form submitHandler={this.submitHandler} />
        <BookList clickHandler={this.addBookHandler} books={this.state.books} />
        <Bookshelf
          className="book-shelf"
          clickHandler={this.removeBookHandler}
          books={this.state.favoriteBooks}
        />
      </div>
    );
  }
}

export default App;
