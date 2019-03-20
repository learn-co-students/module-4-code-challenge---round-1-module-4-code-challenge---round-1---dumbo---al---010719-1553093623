import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  console.log("Prop is: ", props)

  let arrayOfBooks = props.books.map(bookObj =>
  <Book key={bookObj.id} book={bookObj} bookHandler={props.bookHandler}/>)
  return (

    <div>
      <h1>Book Shelf</h1>
      <ul>{arrayOfBooks}</ul>
    </div>
  );
};

export default Bookshelf;
