import React from "react";

class Form extends React.Component {

  state = {
    title: '',
    author: '',
    img: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    this.props.submitHandler(event, this.state)
    this.setState({
      title: '',
      author: '',
      img: ''
    })
  }

  render() {
    return <div className="form">
      <h1>Add a New Book</h1>
      <form>
      <input type="text" placeholder="title" name="title" value={this.state.title}
        onChange={this.handleChange}/>
      <input type="text" placeholder="author" name="author" value={this.state.author}
        onChange={this.handleChange}/>
      <input type="text" placeholder="image" name="img" value={this.state.img}
        onChange={this.handleChange}/>
      <button onClick={this.handleSubmit}>Submit</button>
    </form>
  </div>;
  }
}

export default Form;
