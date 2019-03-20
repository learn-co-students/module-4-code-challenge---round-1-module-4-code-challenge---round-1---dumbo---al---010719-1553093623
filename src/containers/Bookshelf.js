import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  const arrayOfBookShelfBooks = props.bookShelf.map(bookInfo => <Book handleClick={props.handleRemove} bookInfo={bookInfo} />)

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{arrayOfBookShelfBooks}</ul>
    </div>
  );
};

export default Bookshelf;
