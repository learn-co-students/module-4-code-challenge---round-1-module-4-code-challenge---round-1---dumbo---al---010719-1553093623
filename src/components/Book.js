import React from "react";

const Book = props => {
  return (
    <div onClick={props.handleClick}>
      <h2>{props.bookData.title}</h2>
      <img id={props.bookData.id} src={props.bookData.img} alt="" />
    </div>
  );
};

export default Book;
