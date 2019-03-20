import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import Form from "./components/Form";

class App extends Component {

  state={
    allBooks:[],
    singleBook:[]
  }

  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(res=>res.json())
    .then(books=>this.setState({
      allBooks:books
    }))
  }

  handleClick=(e)=>{
    console.log(e.target.id);
    let bookId= e.target.id
    fetch(`http://localhost:3005/books/${bookId}`)
    .then(res=>res.json())
    .then(book=>this.setState({
      singleBook:book
    }))
  }

  handleSubmit = (e,book)=>{
    e.preventDefault()
    console.log(book);
    this.setState({
      allBooks:[book,...this.state.allBooks]
    })
  }

  render(){
    return (
      <div className="book-container">
        <Form handleSubmit={this.handleSubmit}/>
        <BookList books={this.state.allBooks} handleClick={this.handleClick}/>
        <Bookshelf handleClick={this.handleClick} book={this.state.singleBook}/>
      </div>
    );
  }
}

export default App;
