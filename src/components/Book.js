import React from "react";

const Book = props => {

  const bookWasClicked = () => {
    props.bookClick(props.book)
  }

  return (
    <div onClick={bookWasClicked} className="book">
      <h2>{props.book.title}</h2>
      <img src={props.book.img}/>
    </div>
  );
};

export default Book;
