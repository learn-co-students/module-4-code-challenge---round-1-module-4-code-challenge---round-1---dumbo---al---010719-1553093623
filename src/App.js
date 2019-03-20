import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state={
    books:[],
    bookShelf: []
  }

  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(res => res.json())
    .then(books => this.setState({books}))
  }

  handleAdd=(bookObj)=>{
    if(!this.state.bookShelf.includes(bookObj)){
      this.setState({
        bookShelf: [...this.state.bookShelf, bookObj]
      })
   }
  }

  handleRemove=(bookObj)=>{
      const newShelf=[...this.state.bookShelf].filter(book => book.title.toLowerCase()!== bookObj.title.toLowerCase())
      this.setState({
        bookShelf: newShelf
      })
   
  }

  handleSubmit = (bookObj) => {
    if(this.state.books.some(book => book.title.toLowerCase() === bookObj.title.toLowerCase())){
      alert("This book already existed in the book list!")
     }else{
      const newBookList = [bookObj, ...this.state.books]
      this.setState({
        books:newBookList
      })
     }
    
  }

  render() {
    // console.log(this.state.books)
    return (
      <div className="book-container">
        <BookList handleSubmit={this.handleSubmit} books={this.state.books} handleClick={this.handleAdd}/>
        <Bookshelf books={this.state.bookShelf} handleClick={this.handleRemove}/>
      </div>
    );
  }
}

export default App;
