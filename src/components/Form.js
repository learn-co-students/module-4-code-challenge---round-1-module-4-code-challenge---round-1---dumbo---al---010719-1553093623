import React from "react";

class Form extends React.Component {
  state = {
    title: '',
    author: '',
    img: ''
  }

  valueHandler = (e) => {
    switch(e.target.name){
      case "title": this.setState({title:e.target.value}); break;
      case "author": this.setState({author: e.target.value}); break;
      case "img": this.setState({img: e.target.value}); break;
    }
  }
  render() {
    const{title, author, img} = this.state
    return (<div>
      <form onSubmit={this.props.handler}>
        <input name="title" type="text" onChange={this.valueHandler} value={title} placeholder="title"/>
        <input name="author" type="text" onChange={this.valueHandler} value={author} placeholder="author"/>
        <input name="img" type="text" onChange={this.valueHandler} value={img} placeholder="img"/>
        <button type="Submit">Add Book</button>
      </form>
    </div>)
  }
}

export default Form;
