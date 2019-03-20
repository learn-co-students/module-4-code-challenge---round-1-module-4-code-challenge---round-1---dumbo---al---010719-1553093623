import React from "react";

const Selected = props => {
  return (
    <div>
      <h2>{props.bookObj.name}</h2>
      <img onClick= {()=>props.onClick(props.bookObj)}src = {props.bookObj.img}/>
    </div>
  );
};

export default Selected;
