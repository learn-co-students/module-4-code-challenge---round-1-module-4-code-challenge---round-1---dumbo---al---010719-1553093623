import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  let bookArr = props.books.map((book) => { return <Book click={props.click} oneBook={book}/>})
  return (
    <div className="book-shelf">
      <h1>Book Shelf</h1>
      <ul>{bookArr}</ul>
    </div>
  );
};

export default Bookshelf;
