import React from 'react';

class Fieldset extends React.Component {
  render(){
    return(
      <fieldset>
        <label>
          Disga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
          <br></br><textarea 
            name="estadoFavorito" 
            value={this.props.value} 
            onChange={this.props.handleChange} />
        </label><br></br>
      </fieldset>
    )
  }
}

export default Fieldset