import React from "react";

const Book = props => {
  return (
    <div className="book" onClick={() => props.handleOnBookClick(props.book, props.bookClicked)}>
      <h2>{props.book.title}</h2>
      <img src={props.book.img} alt={props.book.name}/>
    </div>
  );
};

export default Book;
