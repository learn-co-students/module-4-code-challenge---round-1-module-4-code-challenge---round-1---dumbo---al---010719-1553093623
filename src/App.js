import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
          state={
            allBooks:[],
            bookShelf: [],
            userInput: ""
          }

          componentDidMount(){
            fetch('http://localhost:3005/books')
            .then(resp => resp.json())
            .then(books => this.setState({allBooks:books}))
          }

    onChange= (e) =>{
      this.setState({userInput: e.target.value})
    }

    onClickAdd = (addBook) => {

      const newBookArray = [...this.state.allBooks].filter(book => book.id !== addBook.id)
      const newBookShelf =  [...this.state.bookShelf,addBook]
      this.setState({
        allBooks: newBookArray,
        bookShelf: newBookShelf

      })
    }

  render() {

    return (
      <div className="book-container">
        <BookList onChange={this.onChange} onClickAdd={this.onClickAdd} bookObj={this.state.allBooks}/>
        <Bookshelf books={this.state.bookShelf}/>
      </div>
    );
  }
}

export default App;
