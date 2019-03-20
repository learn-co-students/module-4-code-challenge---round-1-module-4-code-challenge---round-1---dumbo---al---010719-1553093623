import React from "react";

const Book = props => {

  return (
    <div onClick={()=>props.clickHandler(props.book)}>
      <h2>{props.book.name}</h2>
      <img src={props.book.img} alt=" " />
    </div>
  );
};

export default Book;
