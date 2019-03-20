import React from "react";

class Form extends React.Component {
  state={
  book:{
    title:'',
    image: ''
  }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" value={this.state.value} onChange={this.props.handleChange} />
        </label>
        <label>
          Image:
          <input type="text" value={this.state.value} onChange={this.props.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>)
}
}

export default Form;
