import React from "react";

class Form extends React.Component {

  state = {
    title: '',
    author: '',
    img: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  currentHandler = (event) => {
    event.preventDefault()
    this.props.submitHandler(this.state)
  }

  render() {
    return (
      <div>
        <h2>Create Book Form</h2>
        <form  onSubmit={this.currentHandler } onChange={this.onChange}>
          <input type="text" name="title" placeholder="title" value={this.state.title} />
          <input type="text" name="author" placeholder="author" value={this.state.author} />
          <input type="text" name="img" placeholder="img" value={this.state.img} />
          <button>Add Book</button>
        </form>
      </div>
    )
  }
}

export default Form;
