import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

    let bookList = props.books.map(bookObj => <Book book={bookObj} key={bookObj.id} clickHandler={props.clickHandler}/>)
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{bookList}</ul>
    </div>
  );
};

export default Bookshelf;
