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
          const children = this.props.children;
          for(let i=0; i<children.length;i++) {
            let child = children[i];
            let path = child.props.path || '';
            let reg = pathToRegExp(path, [], {end: false});
            if (reg.test(pathname)) {
              return child; // 将匹配到的组件返回即可
            }
          }
          return null;
        }}
      </Consumer>
    )
  }
}
