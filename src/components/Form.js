import React from "react";

class Form extends React.Component {

  render() {
    return (
      <form>
        <input type="text" placeholder="Title" name="title" value={this.props.title} onChange={this.props.formFunc}/>
        <input type="text" placeholder="Image" name="img" value={this.props.image} onChange={this.props.formFunc}/>
        <button onClick={this.props.formSubmitHelper}>Submit</button>
      </form>
    );
  }
}

export default Form;
