import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state={
    allBooks:[],
    selectedBooks:[],
  }
  componentDidMount(){
    fetch('http://localhost:4000/books')
    .then(resp=>resp.json())
    .then(allBooks=>this.setState({allBooks}))
  }

  handleBookClick=(bookInfo)=>{
    // console.log(bookInfo)
    if(![...this.state.selectedBooks].includes(bookInfo)){
      const updatedBookShelf = [...this.state.selectedBooks, bookInfo]
      this.setState({selectedBooks:updatedBookShelf})
    }
  }

  handleBookShelfClick=(bookInfo)=>{
    const updatedBookShelf = [...this.state.selectedBooks].filter(book=>book.id!==bookInfo.id)
    this.setState({selectedBooks:updatedBookShelf})
  }

  handleSubmit=(event, passedData)=>{
    event.preventDefault()
    const updatedBooks = [passedData, ...this.state.allBooks]
    this.setState({allBooks:updatedBooks})
    // console.log(passedData)
  }
  render() {
    console.log(this.state)
    return (
      <div className="book-container">
      <div className="book-listTop">
      <BookList handleSubmit={this.handleSubmit} handleBookClick={this.handleBookClick} data={this.state} />
      </div>
      <div className="book-shelfTop">
      <Bookshelf handleBookClick={this.handleBookShelfClick} data={this.state}/>
      </div>
      </div>
    );
  }
}

export default App;
