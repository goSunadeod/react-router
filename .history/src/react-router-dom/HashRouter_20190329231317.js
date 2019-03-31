import React,{Component} from 'react';
import {Provider} from './context';
export default class HashRouter extends Component {
  constructor() {
    super();
    this.state = {
      location: {
        pathname: window.location.hash.slice(1) || '/'
      }
    }
  }
  componentDidMount() {
    const {location} = this.state;
    window.location.hash = window.location.hash || '/';
    window.addEventListener('hashchange', () => {
      this.setState({
        location: {
          ...location,
          pathname: 
        }
      })
    })
  }
  render() {
    return (
      <Provider value={{a: 1}}>
       {this.props.children}
      </Provider>
    )
  }
}
