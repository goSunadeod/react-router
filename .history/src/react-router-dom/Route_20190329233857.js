import React,{Component} from 'react';
import {Consumer} from './context';
export default class Route extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Consumer>
        let {path, component: Component} = this.props;
        let pathname = state.location.pathname;
        {state => {
          console.log(state);
          return null;
        }}
      </Consumer>
    )
  }
}
