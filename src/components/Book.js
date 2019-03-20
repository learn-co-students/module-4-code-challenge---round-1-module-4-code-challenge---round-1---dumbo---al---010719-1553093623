import React from "react";

const Book = props => {
  if(props.container === "bookShelf"){
    return (
      <div onClick={()=>props.handleBookClick(props.bookInfo)}>
        <h2>{props.bookInfo.title}</h2>
        <img src={props.bookInfo.img}/>
      </div>
    );
  }else{
    return (
      <div onClick={()=>props.handleBookClick(props.bookInfo)}>
        <h2>{props.bookInfo.title}</h2>
      </div>
    )
  }
};

export default Book;
