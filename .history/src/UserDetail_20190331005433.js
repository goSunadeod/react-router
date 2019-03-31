import React,{Component} from 'react';

export default class UserDetail extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        Detail{this.props.match.params}111
      </div>
    )
  }
}
