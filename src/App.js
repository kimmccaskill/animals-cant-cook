import React, { Component } from 'react';
import Form from './Form';
import AnimalsContainer from './AnimalsContainer';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      animals: []
    }
  }

  addAnimal = (animal) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        "id": animal.id,
        "name": animal.name,
        "diet": animal.diet,
        "fun_fact": animal.fun_fact
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    
    fetch('http://localhost:3001/api/v1/animals', options)
      .then(response => response.json())
      .then(animalData => this.setState({animals: [...this.state.animals, animalData]}))
      .catch(error => console.log(error))
  }

  deleteAnimal = (id) => {
    const filteredAnimals = this.state.animals.filter(animal => animal.id !== id)
    // this.setState({animals: filteredAnimals})
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    
    fetch(`http://localhost:3001/api/v1/animals/${id}`, options)
      .then(response => response.json())
      .then(animalData => this.setState({animals: animalData}))
      .catch(error => console.log(error));
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/animals')
      .then(response => response.json())
      .then(animalData => this.setState({animals: animalData}))
  }

  render() {
    return(
      <main>
        <h1>Animals that are bad at cooking</h1>
        <Form addAnimal={this.addAnimal}/>
        <AnimalsContainer animals={this.state.animals} deleteAnimal={this.deleteAnimal}/>
      </main>
    )
  }
}

export default App;
