import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  let books = props.books.map(book => (
    <Book key={book.id} book={book} handleClick={props.handleClick} />
  ));

  return (
    <div>
      <h1>Book Shelf</h1>
      {books}
    </div>
  );
};

export default Bookshelf;
