import React from "react";
import Book from "../components/Book";

const Bookshelf = (books, handleRemove) => {
  const getAll = () => {
    return books.map(book => Book(book, handleRemove))
  }
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{getAll()}</ul>
    </div>
  );
};

export default Bookshelf;
