import React,{Component} from 'react';
import {Provider} from './context';
export default class HashRouter extends Component {
  constructor() {
    super();
    this.state = {
      location: {
        pathname: 
      }
    }
  }
  componentDidMount() {
    window.location.hash = window.location.hash || '/';
  }
  render() {
    return (
      <Provider value={{a: 1}}>
       {this.props.children}
      </Provider>
    )
  }
}
