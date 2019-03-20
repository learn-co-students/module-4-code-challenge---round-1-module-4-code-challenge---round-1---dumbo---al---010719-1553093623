import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  const arrOfBooks= props.books.map(book => <Book handleClick={props.handleClick} key={book.title} bookObj={book}/>)
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{arrOfBooks}</ul>
    </div>
  );
};

export default Bookshelf;
