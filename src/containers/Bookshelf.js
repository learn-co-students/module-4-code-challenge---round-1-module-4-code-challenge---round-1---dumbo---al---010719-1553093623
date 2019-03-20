import React from "react";
import Book from "../components/Book";
import '../index.css'

const Bookshelf = props => {
  let arrBooks = props.books.map(book => <Book book={book} handleShelf={props.handleShelf}/>)
  return (
    <div className="right">
      <h1>Book Shelf</h1>
      <ul>{arrBooks}</ul>
    </div>
  );
};

export default Bookshelf;
