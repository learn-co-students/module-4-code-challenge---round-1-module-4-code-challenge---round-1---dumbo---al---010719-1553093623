import React from "react";

const Book = props => {
  let { books, clickHandler } = props;
  console.log("PROPS", props.books.title);

  return (
    <div onClick={() => clickHandler(books)}>
      <h2>{props.books.title}</h2>
      <img alt="" src={props.books.img} />
    </div>
  );
};

export default Book;
