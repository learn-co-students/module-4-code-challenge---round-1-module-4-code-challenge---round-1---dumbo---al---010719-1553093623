import React from "react";
import Selected from "../components/selected";

const Bookshelf = props => {

  return (
    <div>
      <h1>Book Shelf</h1>
      <img onClick={(e) => props.onClick(e, props.selectedBook)}src={props.selectedBook.img}/>

    </div>
  );
};

export default Bookshelf;
