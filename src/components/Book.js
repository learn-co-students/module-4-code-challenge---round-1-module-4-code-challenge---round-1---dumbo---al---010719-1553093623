import React from "react";

const Book = props => {
  return (
    <div>
      <h2>{props.bookObj.title}</h2>
      <img src={props.bookObj.img} alt={props.bookObj.title} onClick={() => props.moveBook(props.bookObj, props.container)}/>
    </div>
  );
};

export default Book;
