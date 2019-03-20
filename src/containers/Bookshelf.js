import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  let bookComps = props.bookShelf.map(bookObj => {
    return <Book key={bookObj.id} book={bookObj} bookClick={props.bookClick}/>
  })

  return (
    <div className="book-shelf">
      <h1>Book Shelf</h1>
      <ul>{bookComps}</ul>
    </div>
  );
};

export default Bookshelf;
