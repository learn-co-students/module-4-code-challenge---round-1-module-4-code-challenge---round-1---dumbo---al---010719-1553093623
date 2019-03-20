import React from "react";

class Form extends React.Component {
  state = {
    title: "",
    author: "",
    img: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.submitHandler(this.state);
    this.setState({
      title: "",
      author: "",
      img: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        Title:
        <input
          type="text"
          placeholder="title"
          name="title"
          value={this.state.title}
          onChange={this.changeHandler}
        />
        Author:
        <input
          type="text"
          placeholder="author"
          name="author"
          value={this.state.author}
          onChange={this.changeHandler}
        />
        Image:
        <input
          type="text"
          placeholder="image"
          name="img"
          value={this.state.img}
          onChange={this.changeHandler}
        />
        <button>Add Book</button>
      </form>
    );
  }
}

export default Form;
