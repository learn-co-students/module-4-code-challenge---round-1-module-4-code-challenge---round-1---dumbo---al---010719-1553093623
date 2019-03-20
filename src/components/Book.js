import React from "react";

const Book = props => {

  const handleClick = () => {
    props.addBookToBookShelf(props.bookObj)
  }

  return (
    <div>
      <h2>{props.bookObj.title}</h2>
      <img onClick={handleClick} src={props.bookObj.img}/>
    </div>
  );
};

export default Book;
