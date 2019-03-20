import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state ={
    books: [],
    selectedBook: null,
    userInputTitle: '',
    userInputImage: ''
  }
  onClickAdd = (obj) => {
  this.setState({selectedBook: obj})
}

onClickRemove =(e, obj) =>{
  let selected= !this.state.selectedBook
    this.setState({selectedBook: selected})
}

handleChange = (e, obj)=>{
  console.log()
}

componentDidMount(){
  fetch('http://localhost:3005/books')
  .then(resp => resp.json())
  .then(books => this.setState({books:books}))
}
  render() {
    console.log(this.state.selectedBook)
    return (
      <div className="book-container">
        <BookList books={this.state.books} onClick={this.onClickAdd} userInput = {this.state.userInputTitle} userInputImage = {this.state.userInputImage} handleChange= {this.handleChange}/>
       {this.state.selectedBook ? <Bookshelf onClick ={this.onClickRemove} selectedBook= {this.state.selectedBook}/>:<h1>Empty</h1>}
      </div>
    );
  }
}

export default App;
