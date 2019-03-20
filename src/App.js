import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import Form from "./components/Form";

class App extends Component {

    state = {
        books:[],
        bookShelf:[]
    }



    componentDidMount() {
    fetch('http://localhost:3005/books')
    .then(res => res.json())
    .then(books => this.setState({books}))
    }

    clickHandlerAdd = (obj) => {
        let newArray = [...this.state.bookShelf, obj]
        this.setState({bookShelf: newArray})
    }

    clickHandlerRemove = (bookObj) => {
            let newArray = [...this.state.bookShelf]
            let filteredArray = newArray.filter(obj => obj.id !==bookObj.id)
            this.setState({bookShelf:filteredArray})
    }

    submitHandler = (e, book) => {
        e.preventDefault()
        let newArray = [book, ...this.state.books]
        this.setState({ books: newArray });
    }


    render() {

       console.log(this.state.books)
    return (

      <div className="book-container">
          <Form submitHandler={this.submitHandler} />
        <BookList books={this.state.books} clickHandler={this.clickHandlerAdd}/>
        <Bookshelf books={this.state.bookShelf} clickHandler={this.clickHandlerRemove} />

      </div>
    );
  }
}

export default App;
