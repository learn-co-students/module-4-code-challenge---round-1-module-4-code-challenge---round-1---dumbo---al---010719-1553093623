import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  // console.log(props)
  const {books, action} = props
  return (
    <div className="book-shelf">
      <h1>Book Shelf</h1>
      <ul>{books.map(singleBook => <Book key={singleBook.id} book={singleBook} action={action}/>)}</ul>
    </div>
  );
};

export default Bookshelf;
