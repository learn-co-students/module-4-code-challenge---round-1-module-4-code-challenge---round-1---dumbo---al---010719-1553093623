import React from "react";

class Form extends React.Component {
  state={
    title: "",
    author: "",
    img: ""
  }

  handleChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    this.props.AddBooktoList(this.state)
  }

  render() {
    return(
        <form>
          <input type="text" value={this.state.title} name="title" placeholder="title" onChange={this.handleChange}/>
          <input type="text" value={this.state.author} name="author" placeholder="author" onChange={this.handleChange}/>
          <input type="text" value={this.state.image} name="img" placeholder="img" onChange={this.handleChange}/>
          <button type="submit" onClick={this.handleSubmit}>Add Book</button>
        </form>
  )}
}

export default Form;
