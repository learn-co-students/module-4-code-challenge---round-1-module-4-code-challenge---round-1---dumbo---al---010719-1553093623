import React from "react";
import Book from "../components/Book";

class Bookshelf extends React.Component {
  render() {
  console.log("BookShelf props:", this.props)
  let books= this.props.books.map(book =>
  <Book key={book.id} book={book} clickHandler={this.props.clickHandler}/>)
  return (
    <div className="book-shelf">
      <h1>Book Shelf</h1>
      <ul>{books}</ul>
    </div>
    );
  };
};
export default Bookshelf;
