import React from "react";

class Form extends React.Component {

  state={
    title:"",
    author:"",
    img:""
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Insert Book</h1>
        <form onSubmit={e=>this.props.handleSubmit(e,this.state)}>
          <input type="text"  name="title" placeholder="title" value={this.state.title}
          onChange={this.handleChange}></input>
          <input type="text" name="author" placeholder="author"
          value={this.state.author}
          onChange={this.handleChange}></input>
          <input type="text" name="img" placeholder="img" value={this.state.img}
          onChange={this.handleChange}></input>
          <button>Add Book</button>
        </form>
      </div>
    )
  }
}

export default Form;
