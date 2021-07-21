import React from 'react'

class Button extends React.Component {
  constructor() {
    super()
    this.state = {
      clicadas: 0
    }
    this.onClick = this.onClick.bind(this);
  }
  onClick = () => {
    this.setState((anterior, _props) => ({
      clicadas: anterior.clicadas += 1
    }))
  }


  render(){
    return <button onClick={this.onClick}>{this.state.clicadas}</button>
  }
}

export default Button;
