import React from "react";

class Form extends React.Component {
  state={
    title: " ",
    author: " ",
    img: ""
  }

  handleOnChange =(e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    this.props.handleSubmit(this.state)
    this.setState({
      title: " ",
      author: " ",
      img: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Title: <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange}/>
        Author: <input type="text" name="author" value={this.state.author} onChange={this.handleOnChange}/>
        Img: <input type="url" name="img" value={this.state.img} onChange={this.handleOnChange}/>
        <button>Create Book</button>
      </form>
    )
  }
}

export default Form;
