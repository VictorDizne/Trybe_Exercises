import React, { Component } from 'react';
import { connect } from 'react-redux';
import addClick from '../redux/action';

class ButtonClick extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.add}>Oi, eu sou um butao</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(addClick())
});

export default connect(null, mapDispatchToProps)(ButtonClick);