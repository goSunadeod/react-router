import React,{Component} from 'react';

export default class UserAdd extends Component {
  constructor() {
    super();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.text.current.value);
  }
  render() {
    return (
      <div>
       <form onSubmit={this.handleSubmit}>
         <input type="text" ref={(ref)=> this.text=ref}></input>
         <button typr="submit"></button>
       </form>
      </div>
    )
  }
}
