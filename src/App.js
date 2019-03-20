import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    books: [],
    list: []
  }
  componentDidMount(){
    fetch("http://localhost:3005/books")
    .then(res => res.json())
    .then(books => this.setState({ books }))
  }
  handleAdd = (book) => {
    if(!this.state.list.includes(book)){
      let newList = [...this.state.list, book]
      this.setState({list: newList})
    }
  }
  handleRemove = (book) => {
    let newList = this.state.list.filter(book01 => book01.title !== book.title)
    this.setState({list:newList})
  }
  createBook = (author, title, img) => {
    if(title.length > 0){
      if(img.length === 0){
        img = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Book_stub_img.svg/300px-Book_stub_img.svg.png"
      }
      let newBooks = [{title: title, author: author, img: img}, ...this.state.books]
      this.setState({books: newBooks})
    }
  }
  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} handleAdd={this.handleAdd} createBook={this.createBook}/>
        {Bookshelf(this.state.list, this.handleRemove)}
      </div>
    );
  }
}

export default App;
