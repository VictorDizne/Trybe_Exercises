import React, { Component } from 'react';
import ButtonClick from './components/ButtonClick';
import NumberClicks from './components/NumberClicks';

class App extends Component {
  render() {
    return (
      <div>
        <ButtonClick />
        <NumberClicks />
      </div>
    );
  }
}

export default App;