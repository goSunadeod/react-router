import React,{Component} from 'react';
import {Link} from './react-router-dom';
export default class UserList extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Link to="/user/detail"></Link>
      </div>
    )
  }
}
