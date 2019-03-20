import React from "react";

class Form extends React.Component {

  state = {
    title:'',
    author:'',
    image:''
  }

  changeHandler = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };



  render() {
    return (
      <form onSubmit={ (e) => this.props.submitHandler(this.state)}>
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
      />  <input
      type="text"
      placeholder="image"
      name="image"
      value={this.state.image}
      onChange={this.changeHandler}
      />
      <button>Add Book</button>
      </form>

    )
  }
}

export default Form;
