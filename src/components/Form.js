import React from "react";

class Form extends React.Component {
  state = {
    author: "",
    title: "",
    img: ""
  }
  render() {
    return (
      <h1>
        <input type="text" placeholder="title" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value})}></input>
        <input type="text" placeholder="Author" value={this.state.author} onChange={(e) => this.setState({ author: e.target.value})}></input>
        <input type="text" placeholder="img" value={this.state.img} onChange={(e) => this.setState({ img: e.target.value})}></input>

        <button onClick={() => this.props.createBook(this.state.author, this.state.title, this.state.img)}>Add Book</button>
      </h1>);
  }
}

export default Form;
