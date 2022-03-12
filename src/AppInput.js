import React, { Component } from 'react'

export class AppInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }
  
  handleInputChange = (e) => {
    console.log(e.target.value)
    this.setState({
      email: e.target.value,
    });
  };

  handleFirstName = (e) => {
    
  }

  render() {
    return (
      <>
      <input
      name='email' 
      value={this.state.email} 
      onChange={this.handleInputChange}>
        
      </input>
      <p>{this.state.email}</p>

      <form>
        <input
        name='firstName'
        value={this.state.firstName}
        onChange={handleFirstName}
        />
      </form>
      </>
    )
  }
}

export default AppInput