import React,{Component} from 'react';
import {Link, Route} from './react-router-dom';
import UserAdd from './UserAdd';
import UserList from './UserList';
export default class User extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <div>
         <div className="col-md-2">
            <li>
              <Link to="/user/add">用户添加</Link>
            </li>
            <li>
              <Link to="/user/list">用户列表</Link>
            </li>
         </div>
         <div className="col-md-10">
           
         </div>
      </div>
    )
  }
}