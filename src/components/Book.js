import React from "react";

const Book = props => {
  return (
    <div>
      <h4>{props.book.title}</h4>
      <img
        alt=""
        src={props.book.img}
        width="80"
        onClick={() => {
          props.handleClick(props.book);
        }}
      />
    </div>
  );
};

export default Book;
