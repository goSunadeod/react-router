import React,{Component} from 'react';
import {Consumer} from './context';
export default class Switch extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Consumer>
        {state=> {
          let pathname = state.location.path;
        }}
      </Consumer>
    )
  }
}
