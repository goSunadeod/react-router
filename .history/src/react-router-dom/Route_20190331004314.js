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
          let keys = [];
          let reg = pathToReg(path, [], {end: exact});
          let result = pathname.match(reg);
          keys = keys.map(item=>item.name);
          let [url, ...values] = result || [];
          let props = {
            location:state.location,
            history: state.history,
            match:{
              params: keys.reduce()
            }
          }
          if (result) {
            return <Component {...props}></Component>
          }
          return null;
        }}
      </Consumer>
    )
  }
}
