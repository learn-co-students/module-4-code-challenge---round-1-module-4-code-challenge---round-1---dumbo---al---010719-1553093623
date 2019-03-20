import React from "react";

class Form extends React.Component {

  state = {
    title: '',
    author: '',
    img: ''
  }

  changeHandler = (event) => {
    console.log('typed');
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.props.handleSubmit(event, this.state)}>
            <input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.changeHandler}/>
            <input type="text" name="author" placeholder="author" value={this.state.author} onChange={this.changeHandler}/>
            <input type="text" name="img" placeholder="img" value={this.state.img} onChange={this.changeHandler}/>
            <button>Add Book </button>
        </form>
      </div>
    )
  }
}

export default Form;
