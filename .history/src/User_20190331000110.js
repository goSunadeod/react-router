import React,{Component} from 'react';
import {render} from 'react-dom';
export default class User extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <div>
         <div className="col-md-2">
            <li></li>
         </div>
         <div className="col-md-10"></div>
      </div>
    )
  }
}