import React from "react";

const Book = (book, handle) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <img src={book.img} className="img" onClick={() => handle(book)}/>
    </div>
  );
};

export default Book;
