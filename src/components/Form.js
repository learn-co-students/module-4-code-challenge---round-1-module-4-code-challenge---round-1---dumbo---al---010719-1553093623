import React from "react";

class Form extends React.Component {
  state = {
    title: '',
    author: '',
    img: ''
  }

  handleSubmit = (event) => {
    this.setState( { title: this.state.title, author: this.state.author, img: event.target.img  })
    event.preventDefault();

  }

  handleOnChange = (event) => {
    this.setState( {[event.target.name]: event.target.value  })
  }


  render() {
    return (
      <div>
        <form onSubmit={() => this.handleSubmit()}>
          <label>
            <input type="text" value={ this.state.title } onChange={ this.handleOnChange } name="title" placeholder="title" />
            <input type="text" value={ this.state.author } onChange={ this.handleOnChange } name="author" placeholder="author" />
            <input type="text" value={ this.state.img } onChange={ this.handleOnChange } name="img" placeholder="img" />
            <input type="submit" value="Add Book" />
          </label>
        </form>
      </div>
    )
  }
}

export default Form;
