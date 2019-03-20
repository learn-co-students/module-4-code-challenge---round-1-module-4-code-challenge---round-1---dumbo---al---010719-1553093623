import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    bookShelf: []
  }
  
  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(resp => resp.json())
    .then(books => this.setState({books:books}))
  }

  actionHandler = (e, bookId) => {
    // console.log(e.target.parentElement.parentElement)
    //nested if statement that checks if the bookShelf has the book before adding it to bookshelf
  if(e.target.parentElement.parentElement.className === "books__list"){
    const search = this.state.books.find(book => book.id === bookId);
    if(this.state.bookShelf.find(book => book.id === bookId) === undefined){
      this.setState({bookShelf: [...this.state.bookShelf, search]});
    }else{
      return null;
    }
  }else{
      const search = this.state.bookShelf.filter(book => book.id !== bookId);
      this.setState({bookShelf: search});
    }
  }

  formHandler = (e) => {
    e.preventDefault();
    let newBook = {
      id: this.state.books.length + 1,
      title: e.target.title.value,
      author: e.target.author.value,
      img: e.target.img.value
    }
    this.setState({books: [newBook, ...this.state.books]})
    
  }

  render() {
    // console.log(this.state.books)
    // console.log(this.state.bookShelf)
    const {books, bookShelf} = this.state
    return (
      <div className="book-container">
        <BookList books={books} action={this.actionHandler} form={this.formHandler}/>
        <Bookshelf books={bookShelf} action={this.actionHandler}/>
      </div>
    );
  }
}

export default App;
