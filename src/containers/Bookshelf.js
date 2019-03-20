import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
   const bookShelfArray = props.books.map(book => (<Book />))
     // console.log(bookShelfArray)
  return (

    <div>
      <h1>Book Shelf</h1>
      <ul>{bookShelfArray}</ul>
    </div>
  );
};

export default Bookshelf;
