import React,{Component} from 'react';

export default class UserDetail extends Component {
  constructor() {
    super();
  }
  render() {
    console.log('id', this.props.match.params.id);
    return (
      <div>
        Detail{this.props.match.params.id}
      </div>
    )
  }
}
