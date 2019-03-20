import React from "react";

class Form extends React.Component {

//form isnt rendering 
  state = {
    title: "",
    author: "",
    img: ""
  };

  changeHandler = e => {
    // console.log(e.target.value);
    e.preventDefault()
    this.setState({
      [e.target.title]: e.target.value
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
        <input
          type="text"
          placeholder="title"
          name="title"
          value={this.state.title}
          onChange={this.changeHandler}
            />
          <input
              type="text"
              placeholder="author"
              name="author"
              value={this.state.author}
              onChange={this.changeHandler}
            />
            <input
              type="text"
              placeholder="img"
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
