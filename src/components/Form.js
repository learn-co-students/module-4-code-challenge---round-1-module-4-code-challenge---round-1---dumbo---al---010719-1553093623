import React from "react";

class Form extends React.Component {
  state = {
    title: "",
    author: "",
    img: ""
  }

  handleChange = (event) => {
    console.log(event.target.name)
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    console.log(this.state)
    return (
      <form onSubmit={(event) => this.props.addBook(event, this.state)}>
        <input placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange}></input>
        <input placeholder="Author" name="author" value={this.state.author} onChange={this.handleChange}></input>
        <input placeholder="Img" name="img" value={this.state.img} onChange={this.handleChange}></input>
        <button>Add Book!</button>
      </form>
    );
  }
}

export default Form;
