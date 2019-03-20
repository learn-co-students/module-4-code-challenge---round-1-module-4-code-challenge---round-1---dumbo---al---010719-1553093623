import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    return (
      <div className="form">
        <h1>Book List</h1>
        <Form handleSubmit={this.props.handleSubmit} handleForm={this.props.handleForm} data={this.props.data} />
        <ul>{this.props.data.allBooks.map(book=><Book container={"bookList"} handleBookClick={this.props.handleBookClick} bookInfo={book} data={this.props.data} key={book.id} />)}</ul>
      </div>
    );
  }
}

export default BookList;
