import React,{Component} from 'react';
import {Link, Route} from './react-router-dom';
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
         </div>
         <div className="col-md-10">
           <li>
              <Link to="/user/add">用户添加</Link>
            </li>
         </div>
      </div>
    )
  }
}