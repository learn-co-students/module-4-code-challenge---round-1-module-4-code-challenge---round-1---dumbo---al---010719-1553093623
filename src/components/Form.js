import React from "react";

class Form extends React.Component {
  state = {
    title: "",
    author: "",
    img: ""
  }

  handleOnInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleNewBook = (e) => {
    e.preventDefault()
    this.props.handleNewBook(this.state)
    this.setState({
      name: "",
      author: "",
      title: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleNewBook}>
        <input name="title" placeholder="title" onChange={this.handleOnInputChange} value={this.state.title}/>
        <input name="author" placeholder="author" onChange={this.handleOnInputChange} value={this.state.author}/>
        <input name="img" placeholder="img" onChange={this.handleOnInputChange} value={this.state.img}/>
        <input type="submit" value="Add book"/>
      </form>
    );
  }
}

export default Form;
