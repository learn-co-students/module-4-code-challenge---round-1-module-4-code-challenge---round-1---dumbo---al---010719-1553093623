import React from "react";

const Book = props => {
  return (
    <div onClick={() => props.handleClick(props.bookInfo)}>
      <h2>{props.bookInfo.title}</h2>
      <img src={props.bookInfo.img}></img>
    </div>
  );
};

export default Book;
