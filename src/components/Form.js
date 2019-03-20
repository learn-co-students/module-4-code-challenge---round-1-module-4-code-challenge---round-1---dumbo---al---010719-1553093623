import React from "react";

class Form extends React.Component {
  state={
    id:"",
    title:"",
    author:"",
    img:"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
  }

  render() {
    return (
      <form onSubmit={(event)=>this.props.handleSubmit(event, this.state)}>
        <label>
          Title:
          <input type="text" value={this.state.title} onChange={(e)=>{
            const newValue = e.target.value
            const newKey = this.props.data.allBooks.length+1
            this.setState({id:newKey, title:newValue})
          }} />
        </label>

        <label>
          Author:
          <input type="text" value={this.state.author} onChange={(e)=>{
            const newValue = e.target.value
            this.setState({author:newValue})
          }} />
        </label>

        <input type="submit" value="Submit" />
      </form>

    )
  }
}

export default Form;
