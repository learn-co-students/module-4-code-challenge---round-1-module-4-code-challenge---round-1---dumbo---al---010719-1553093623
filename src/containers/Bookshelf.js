import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {


  const renderBookToShelf = () => {
    let newArr = props.bookShelf.map(book => {
      return <Book key={book.id} bookObj={book}/>
    })
    return newArr
  }

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{renderBookToShelf()}</ul>
    </div>
  );
};

export default Bookshelf;
