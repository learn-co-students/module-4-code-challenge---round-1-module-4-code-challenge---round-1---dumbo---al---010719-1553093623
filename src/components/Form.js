import React from "react";

class Form extends React.Component {

  state = {
    title: "",
    author: "",
    img: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.title !== "" && this.state.author !== "" && this.state.img !== ""){
      this.props.handleSubmitBook(this.state)
    }
    this.setState({
      title: "",
      author: "",
      img: ""
    })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Create a New Book: </h1>
        <form onSubmit={this.handleSubmit} >
          <input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.handleChange}/>
          <input type="text" name="author" placeholder="author" value={this.state.author} onChange={this.handleChange}/>
          <input type="text" name="img" placeholder="book cover img" value={this.state.img} onChange={this.handleChange}/>
          <input type="submit" value="Add Book" />
        </form>
      </div>
    );
  }
}

export default Form;
