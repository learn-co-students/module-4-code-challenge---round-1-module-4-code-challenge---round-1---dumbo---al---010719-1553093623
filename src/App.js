import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import Form from './components/Form'

class App extends Component {

  state = {
    allBooks: [],
    shelf: []
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
      .then(resp => resp.json())
      .then(allBooks => this.setState({allBooks}))
  }

  moveBook = (bookObj, container) => {
    let allcpy = [...this.state.allBooks];
    let shelfcpy = [...this.state.shelf];

    if (container === 'all') {
      let findShelf = this.state.shelf.find(book => book.title.toLowerCase()  === bookObj.title.toLowerCase());
      
      if (findShelf === undefined) {
        shelfcpy.unshift(bookObj);
      }
    } else if (container === 'shelf') {
      shelfcpy = shelfcpy.filter(book => book.id !== bookObj.id);
    }

    this.setState({
      allBooks: allcpy,
      shelf: shelfcpy
    })
  }

  addBook = (bookObj) => {
    let findAll = this.state.allBooks.find(book => book.title.toLowerCase()  === bookObj.title.toLowerCase());
    let findShelf = this.state.shelf.find(book => book.title.toLowerCase()  === bookObj.title.toLowerCase());

    if(findAll === undefined && findShelf === undefined ){
      this.setState({allBooks: [bookObj, ...this.state.allBooks]});
    } else {
      alert('dupe on title');
    }
  }

  render() {
    return (
      <div className="book-container">
        <Form addBook={this.addBook} />
        <BookList allBooks={this.state.allBooks} container={'all'} moveBook={this.moveBook} />
        <Bookshelf shelf={this.state.shelf} container={'shelf'} moveBook={this.moveBook} />
      </div>
    );
  }
}

export default App;
