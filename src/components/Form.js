import React from "react";

class Form extends React.Component {
  state = {
    title: '',
    author: '',
    img: ''
  }

  submit = (event) => {
    event.preventDefault();

    const book = {
      title: this.state.title,
      author: this.state.author,
      img: this.state.img,
      id: new Date()
    }

    this.props.addBook(book);
  }

  render() {
    return(
      <form onSubmit={this.submit} >
        <label>Title: </label>
        <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})}/>
        <label>Author: </label>
        <input type="text" value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}/>
        <label>Img: </label>
        <input type="text" value={this.state.img} onChange={(event) => this.setState({img: event.target.value})}/>
        
        <input type="submit" value="Add Book"/>
      </form>
    );
  }
}

export default Form;
