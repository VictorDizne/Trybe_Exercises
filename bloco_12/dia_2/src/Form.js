import React, { Component } from 'react'
import Fieldset from './Fieldset';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
    };
    this.fileInput = React.createRef();
  }


  handleChange(event) {
      let target = event.target
      const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
            <Fieldset value={this.state.estadoFavorito} handleChange={this.handleChange}/>
          <input
            value={this.state.idade}
            onChange={this.handleChange}
            type="number"
            name="idade"
          /><br></br>
          <input
            value={this.state.vaiComparecer}
            onChange={this.handleChange}
            type="checkbox"
            name="vaiComparecer"
          /><br></br>
          <label>
              Upload File:
              <br></br><input type='file' ref={this.fileInput}>
              </input>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;