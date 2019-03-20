import React from "react";
import Book from "../components/Book";

class Bookshelf extends React.Component {

  render(){
    let books = this.props.allBooks.map(book => <li><Book book={book} handleClick={this.props.handleClick}/></li>)

    return (
      <div>
      <h1>Book Shelf</h1>
      <ul>{books}</ul>
      </div>
    );
  }

};

export default Bookshelf;
