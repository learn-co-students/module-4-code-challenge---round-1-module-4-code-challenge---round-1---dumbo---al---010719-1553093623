import React from "react";
import '../index.css'

const Book = props => {
  return (
    <div onClick={() => props.handleShelf(props.book)}>
      <h2>{props.book.title}</h2>
      <img src={props.book.img}/>
    </div>
  );
};

export default Book;
