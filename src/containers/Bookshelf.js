import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  const bookComponents = props.bookshelf.map(bookObj => (
    <Book key={bookObj.id || bookObj.title} book={bookObj} handleOnBookClick={props.handleOnBookClick} bookClicked={props.bookClicked}/>
  ))
  return (
    <div className="bookshelf">
      <h1>Book Shelf</h1>
      <ul>{bookComponents}</ul>
    </div>
  );
};

export default Bookshelf;
