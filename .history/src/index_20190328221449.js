import React,{Component} from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Route}  from 'react-router-dom';
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
         <div>
           <Route path="/home" component={Home}></Route>
        </div>
      </Router>
    )
  }
}
render(<App></App>, window.root);