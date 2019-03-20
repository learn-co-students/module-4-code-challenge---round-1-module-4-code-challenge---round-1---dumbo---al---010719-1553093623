import React from "react";

const Book = props => {
  return (
    <div>
      <h2>{props.bookObj.title}</h2>
      {/*book img*/}
      <img onClick ={() => props.handleClick(props.bookObj)} src={props.bookObj.img} alt="Book"/>
    </div>
  );
};

export default Book;
