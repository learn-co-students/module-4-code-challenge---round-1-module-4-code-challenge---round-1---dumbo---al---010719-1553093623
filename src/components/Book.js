import React from "react";

const Book = props => {
  return (
    <div>
      <h2>{props.book.title}</h2>
      <h5>by {props.book.author}</h5>
      <img src={props.book.img} alt={props.book.title}
      onClick={() => props.handleClick(props.book)}
      ></img>
    </div>
  );
};

export default Book;
