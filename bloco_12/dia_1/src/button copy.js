import React from 'react'

class Button3 extends React.Component {
  constructor() {
    super()
    this.state = {
      clicadas: 0
    }
    this.onClick = this.onClick.bind(this);
    this.dblClick = this.dblClick.bind(this);
  }
  onClick = () => {
    this.setState((anterior, _props) => ({
      clicadas: anterior.clicadas += 1
    }))
  }

  dblClick = () =>{
    this.setState((anterior, _props) => ({
      clicadas: anterior.clicadas += 2
    }))
  }


  render(){
    return <button dblClick={this.dblClick} onClick={this.onClick}>{this.state.clicadas}</button>
  }
}

export default Button3;
