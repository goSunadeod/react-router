import React,{Component} from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Router}  from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import User from './User';
export default class App extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <Router>
         123
      </Router>
    )
  }
}
render(<App></App>, window.root);