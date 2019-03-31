import React,{Component} from 'react';

export default class UserAdd extends Component {
  constructor() {
    super();
  }
  handleSubmit = () => {
    console.log();
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
