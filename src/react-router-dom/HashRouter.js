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
          pathname: window.location.hash.slice(1) || '/'
        }
      })
    })
  }
  render() {
    const {location} = this.state;
    let value = {
      location,
      history: {
        push(to) {
          window.location.hash = to;
        }
      }
    }
    return (
      <Provider value={value}>
       {this.props.children}
      </Provider>
    )
  }
}
