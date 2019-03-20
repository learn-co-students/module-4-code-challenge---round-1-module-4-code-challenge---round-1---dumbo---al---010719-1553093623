import React from "react";

const Book = ( props ) => {
  // console.log(props)
  const { book, handleClick } = props
  return (
    <div className="bookshelf">
      <h2>{ book.title }</h2>
      <img onClick={ () => handleClick(props.book) } src={ book.img } />
    </div>
  );
};

export default Book;
