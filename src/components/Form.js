import React from "react";

class Form extends React.Component {
  render() {
    return (
        <div>
        <h1>Add Book</h1>
          <input type="text" name="title"/>
          <input type="text" name="author"/>
          <input type="text" name="image"/>
          <button onSubmit={() => {this.handleSubmit()}}>Submit</button>
        </div>
  )
  }
}

export default Form;
