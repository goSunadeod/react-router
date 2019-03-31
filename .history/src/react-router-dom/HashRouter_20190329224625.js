import React,{Component} from 'react';
import {Provider} from './context';
export default class HashRouter extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Provider value={{a: 1}}>
       {this.props.childrem}
      </Provider>
    )
  }
}
