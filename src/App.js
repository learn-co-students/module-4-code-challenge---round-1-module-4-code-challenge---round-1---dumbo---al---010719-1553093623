import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import Form from './components/Form'

class App extends Component {

  state = {
    books: [],
    listOfClickedBooks: [],
    clickedBook: null
  }

  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(res => res.json())
    .then(booksData => this.setState({
      books: booksData
    }))
  }

  clickHandlerToAddToShelf = (bookObj) => {

    let newArr = [bookObj, ...this.state.listOfClickedBooks]

    !this.state.listOfClickedBooks.includes(bookObj) ? this.setState({ listOfClickedBooks: newArr, clickedBook: bookObj }) : alert('Book Already On Bookshelf!')}

  clickHandlerToRemoveFromShelf = (bookObj) => {
    let newArr = [...this.state.listOfClickedBooks].filter(book => book.id !== bookObj.id)

    this.setState({
      listOfClickedBooks: newArr,
      clickedBook: bookObj
    })
  }

  submitHandler = (event, newBookObj) => {
    event.preventDefault()
    newBookObj.id = this.state.books.length + 1

    let newArr = [newBookObj, ...this.state.books]

    this.setState({
      books: newArr
    })
  }

  render() {
    return (
      <div className="book-container">
        <Form submitHandler={this.submitHandler}/>
        <BookList books={this.state.books} clickHandler={this.clickHandlerToAddToShelf}/>
        <Bookshelf listOfClickedBooks={this.state.listOfClickedBooks} clickHandler={this.clickHandlerToRemoveFromShelf}/>
      </div>
    );
  }
}

export default App;
