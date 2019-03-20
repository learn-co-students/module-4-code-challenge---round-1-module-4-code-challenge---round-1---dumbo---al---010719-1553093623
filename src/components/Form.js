import React from "react";

class Form extends React.Component {
  state = {
    title:'',
    author:'',
    img:''
  }

  handleTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  handleAuthor = (e) => {
    this.setState({
      author: e.target.value
    })
  }
  handleImage = (e) => {
    this.setState({
      img: e.target.value
    })
  }




  render() {
    console.log(this.state.title);
    return (
      <form onSubmit = {(e)=>this.props.handleSubmit(e, this.state)}>
        <input type = "text" placeholder = "title" onChange = {this.handleTitle}></input>
        <input type = "text" placeholder = "author" onChange = {this.handleAuthor}></input>
        <input type = "text" placeholder = "image" onChange = {this.handleImage}></input>
        <button>Submit</button>
      </form>
    )
  }
}

export default Form;
