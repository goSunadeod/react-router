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
          const {path, component: Component} = this.props;
          let pathname = state.location.pathname;
          let reg = pathToReg(path, [], {end: false});
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
