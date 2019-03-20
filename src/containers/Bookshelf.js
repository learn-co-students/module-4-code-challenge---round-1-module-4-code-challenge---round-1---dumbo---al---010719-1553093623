import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  let arrayOfBookshelfCards = props.listOfClickedBooks.map(bookObj => <Book key={bookObj.id} book={bookObj} clickHandler={props.clickHandler}/>)

  return (
    <div className="book-shelf">
      <h1>Book Shelf</h1>
      <ul>{arrayOfBookshelfCards}</ul>
    </div>
  );
};

export default Bookshelf;
