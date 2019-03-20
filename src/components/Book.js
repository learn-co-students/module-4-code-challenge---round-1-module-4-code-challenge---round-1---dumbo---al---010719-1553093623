import React from "react";

const Book = props => {
  // console.log(props.book)
  const {title, id, img} = props.book
  return (
    <div>
      <h2>{title}</h2>
      <img onClick={(e) => props.action(e, id)} src={img}/>
    </div>
  );
};

export default Book;
