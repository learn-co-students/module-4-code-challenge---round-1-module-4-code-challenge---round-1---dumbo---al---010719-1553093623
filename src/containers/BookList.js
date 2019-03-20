import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  state = {
    title: "",
    img: ""
  }

  formFunc = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  formSubmitHelper = (e) => {
    e.preventDefault()
    this.props.formSubmit(this.state)
  }

  render() {
    let bookComps = this.props.books.map(bookObj => {
      return <Book key={bookObj.id} book={bookObj} bookClick={this.props.bookClick}/>
    })

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form title={this.state.title} img={this.state.img} formFunc={this.formFunc} formSubmitHelper={this.formSubmitHelper}/>
        <ul>{bookComps}</ul>
      </div>
    );
  }
}

export default BookList;
