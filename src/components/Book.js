import React from "react";

const Book = props => {
    console.log("this is book props", props.books.title)
    return (

    <div onClick={() => props.addToShelf(props.books)}>
      <h2>{props.books.title}</h2>
      <img  src={props.books.img}/>
    </div>
  );
};

export default Book;
