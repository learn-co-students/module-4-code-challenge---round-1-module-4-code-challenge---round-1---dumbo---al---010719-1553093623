import React from "react";

class Form extends React.Component {
  state={
    title: "",
    author: "",
    img: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value },
      console.log(`The ${event.target.name} is ${event.target.value}.`)
    )
  }

  handleSubmit = (event) => {
    this.props.handleSubmit(event, this.state)
    this.setState({
      title: "",
      author: "",
      img: ""
    })
  }

  render() {
    return (
      <div className="book-form">
        <h5>Add a Book: </h5>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange}/>
          <input type="text" name="author" placeholder="Author" value={this.state.author} onChange={this.handleChange}/>
          <input type="text" name="img" placeholder="Image URL" value={this.state.img} onChange={this.handleChange}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default Form;
