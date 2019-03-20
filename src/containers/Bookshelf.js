import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  const booksArr = props.shelf.map(book => <Book key={book.title} bookObj={book} container={'shelf'} moveBook={props.moveBook} />)

  return (
    <div className="book-shelf">
      <h1>Book Shelf</h1>
      <ul>{booksArr}</ul>
    </div>
  );
};

export default Bookshelf;
