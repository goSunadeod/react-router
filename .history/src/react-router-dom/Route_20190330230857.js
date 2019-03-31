import React,{Component} from 'react';
import {Consumer} from './context';
import pathToReg from 'path-to-regexp';
export default class Route extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Consumer>
        {state => {
          const {path, component: Component, exact = false} = this.props;
          let pathname = state.location.pathname;
          let reg = pathToReg(path, [], {end: exact});
          let result = pathname.match(reg);
          if (result) {
            return <Component></Component>
          }
          return null;
        }}
      </Consumer>
    )
  }
}
