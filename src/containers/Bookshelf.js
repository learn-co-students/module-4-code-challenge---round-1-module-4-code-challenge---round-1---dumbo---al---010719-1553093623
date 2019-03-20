import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
    console.log("books in shelf", props.shelf)
    let bookShelf = props.shelf.map(book => <Book book={book}/>)
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{bookShelf}</ul>
    </div>
  );
};

export default Bookshelf;
