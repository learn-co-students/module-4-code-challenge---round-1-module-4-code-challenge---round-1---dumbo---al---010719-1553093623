import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div className="book-shelf">
      <h1>Book Shelf</h1>
      <ul>{
        props.books.length === 0 ? "You don't have any books" :
        props.books.map(book => <Book key={book.id}
        book={book}
        handleClick={props.handleClick}/> )}
      </ul>
    </div>
  );
};

export default Bookshelf;
