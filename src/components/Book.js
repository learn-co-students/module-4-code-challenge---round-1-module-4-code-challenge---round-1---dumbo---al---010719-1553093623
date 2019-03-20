import React from "react";

const Book = props => {
  return (
    <div className="book">
      <h2>{props.oneBook.title}</h2>
      <img src={props.oneBook.img} alt="" onClick={() => {props.click(props.oneBook)}}/>
    </div>
  );
};

export default Book;
