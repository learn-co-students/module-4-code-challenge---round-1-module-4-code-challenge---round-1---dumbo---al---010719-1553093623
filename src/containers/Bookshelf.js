import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div className="book-shelf">
      <h1>Book Shelf</h1>
      <ul>{props.data.selectedBooks.map(book=><Book container={"bookShelf"} handleBookClick={props.handleBookClick} bookInfo={book} data={props.data} key={book.title} />)}</ul>
    </div>
  );
};

export default Bookshelf;
