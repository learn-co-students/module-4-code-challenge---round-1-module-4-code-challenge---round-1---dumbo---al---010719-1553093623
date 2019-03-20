import React from "react";

const Book = props => {
  return (
    <div>
      <h2>{props.bookObj.title}</h2>
      <img src={props.bookObj.img}/>
    </div>
  );
};

export default Book;
