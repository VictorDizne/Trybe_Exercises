import React from 'react';
import Image from './Image'

class UserProfile extends React.Component {
  render() {

    return (
      <div>
        <h1>{this.props.user.name}</h1>
        <h1>{this.props.user.email}</h1>
        <Image source={this.props.user.avatar} altText={this.props.user.name}/>
      </div>
    )
  }
}

export default UserProfile;