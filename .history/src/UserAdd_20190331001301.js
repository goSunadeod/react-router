import React,{Component} from 'react';

export default class UserAdd extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
       <form onSubmit={this.handleSubmit}>
         <input type="" ref={(ref)=> this.text=ref}></input>
         <button typr="submit"></button>
       </form>
      </div>
    )
  }
}
