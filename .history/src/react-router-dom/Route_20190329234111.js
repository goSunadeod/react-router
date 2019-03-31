import React,{Component} from 'react';
import {Consumer} from './context';
export default class Route extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Consumer>
        {state => {
          const {path, component} = this.props;
          let pathname = state.location.pathname;
          console.log(state);
          return null;
        }}
      </Consumer>
    )
  }
}
