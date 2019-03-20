import React from "react";

class Form extends React.Component {
  state = {
    title: "",
    author: "",
    img: "",
    book: this.props.book
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.props.handleSubmit(this.state);
    this.setState({
      title: "",
      author: "",
      img: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="author"
          name="author"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="img"
          name="img"
          onChange={this.handleChange}
        />
        <button>submit</button>
      </form>
    );
  }
}

export default Form;
