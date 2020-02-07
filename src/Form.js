import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
        id: Math.random() + 1,
        name: '',
        diet: '',
        fun_fact: ''
    }
  }

  updateChange = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  submitAnimal = () => {
    this.props.addAnimal(this.state)
    this.setState( {id: Math.random(), name: '', diet: '', fun_fact: ''})
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.name}
          placeholder="Animal name..."
          name="name"
          onChange={this.updateChange}/>
        <input
          type="text"
          value={this.state.diet}
          placeholder="Diet..."
          name="diet"
          onChange={this.updateChange}/>
        <input
          type="text"
          value={this.state.fun_fact}
          placeholder="Fun fact!!!"
          name="fun_fact"
          onChange={this.updateChange}/>
        <button type="button" onClick={this.submitAnimal}>submit</button>
      </form>
    )
  }
}

export default Form;