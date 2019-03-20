import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  const { addBooks } = props
  const renderBooks = addBooks.map(bookObj => <Book handleClick={ props.handleClick }  book={ bookObj } key={ bookObj.id } /> )
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{ renderBooks }</ul>
    </div>
  );
};

export default Bookshelf;
