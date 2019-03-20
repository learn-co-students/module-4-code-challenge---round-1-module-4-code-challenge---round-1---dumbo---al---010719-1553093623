import React from "react";

class Form extends React.Component {

  state = {
    titleInput: "",
    authorInput: "",
    imageInput: ""
  }

  titleChange = (event) => {
    this.setState({
      titleInput: event.target.value
    })
  }

  authorChange = (event) => {
    this.setState({
      authorInput: event.target.value
    })
  }

  imageChange = (event) => {
    this.setState({
      imageInput: event.target.value
    })
  }

  // handleChange = (event) => {
  //   const name = event.target.name
  //   const value = event.target.value
  //   this.setState({
  //     [name]: value
  //   })
  // }

// when I handle a submit I want to create a new book and add it to my books arr
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createNewBook(event.target)

  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input placeholder ="title" value={this.props.titleInput} onChange={this.titleChange} name="title"/>
        </label>
        <label>
          <input placeholder ="author" value={this.props.authorInput} onChange={this.authorChange} name="author"/>
        </label>
        <label>
          <input placeholder ="image" value={this.props.imageInput} onChange={this.imageChange} name="image" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
