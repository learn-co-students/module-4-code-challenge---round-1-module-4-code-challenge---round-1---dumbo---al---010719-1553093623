import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
    state = {
        books: [],
        shelf: []
    }

    componentDidMount() {
        fetch('http://localhost:3005/books')
            .then(resp => resp.json())
            .then(books => {
                this.setState({
                    books: books
                })
            })
    }

    // bookHandler = (input) => {
    //     let shelfCopy = [...this.state.shelf]
    //     let booksCopy = [...this.state.books]
    //     if(shelfCopy.includes(input)){
    //         shelfCopy = shelfCopy.filter(book => book.id !== input.id)
    //         booksCopy = [input , ...booksCopy]
    //         this.setState({
    //             books: booksCopy,
    //             shelf: shelfCopy
    //         })
    //     } else {
    //         newBooksArray = [...this.state.books.filter(book => book.id !== input.id)]
    //         this.setState({
    //             books: [...newBooksArray],
    //             shelf: [input, ...this.state.shelf]
    //         })
    //     }
    // }

    addToShelf = (input) => {
        let newBooksArray = [...this.state.books].filter(book => book.id !== input.id)
        console.log("newBooksArray", newBooksArray)
        this.setState({
            books: [...newBooksArray],
            shelf: [input, ...this.state.shelf]
        })
        console.log("input", input)
    }

    removeFromShelf = (input) => {
        let shelfArray = [...this.state.shelf].filter(book => book.id !== input.id)
        this.setState({
            books: [input, ...this.state.books],
            shelf: shelfArray
        })
    }

    handleSubmit = (event, input) => {
        event.preventDefault()
        fetch('http://localhost:3005/books', {
            method: 'POST',
            body: JSON.stringify(input),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    }



    render() {
        console.log("the state of books is", this.state.books)
    return (
      <div className="book-container">
        <BookList handleSubmit={this.handleSubmit} removeFromShelf={this.removeFromShelf} addToShelf={this.addToShelf} books={this.state.books}/>
        <Bookshelf removeFromShelf={this.removeFromShelf} addToShelf={this.addToShelf} shelf={this.state.shelf}/>
      </div>
    );
  }
}

export default App;
