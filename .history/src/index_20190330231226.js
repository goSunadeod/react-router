import React,{Component} from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Route, Link}  from 'react-router-dom';
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
          <div>
            
          </div>
          <div>
            <Route path="/home/123" component={Home}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/user" component={User}></Route>
          </div>
        </div>
      </Router>
    )
  }
}
render(<App></App>, window.root);