import React,{Component} from 'react';
import {Consumer} from './context';
import pathToRegExp from 'path-to-regexp';
export default class Switch extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Consumer>
        {state=> {
          const pathname = state.location.pathname;
          const childern = this.props.children;
          for(let i=0; i<children.length;i++) {
            
          }
        }}
      </Consumer>
    )
  }
}
