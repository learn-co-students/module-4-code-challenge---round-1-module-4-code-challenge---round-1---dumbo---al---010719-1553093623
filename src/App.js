import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    books: [],
    bookShelf: []
  }

 componentDidMount = () => {
   fetch('http://localhost:3005/books')
   .then(resp => resp.json())
   .then(book => this.setState({
     books: book
   }))
 }

 addBookToBookShelf = (book) => {
   const newArr = [...this.state.bookShelf, book]
   this.setState({
     bookShelf: newArr
   })
 }

 createNewBook = (book) => {
   const newArr = [...this.state.books, book]
   this.setState({
     books: newArr
   })
  
 }



  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} addBookToBookShelf={this.addBookToBookShelf} createNewBook={this.createNewBook}/>
        <Bookshelf addBookToBookShelf={this.addBookToBookShelf} bookShelf={this.state.bookShelf}/>
      </div>
    );
  }
}

export default App;
