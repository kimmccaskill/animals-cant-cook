import React from 'react';
import Animal from './Animal'

const AnimalsContainer = (props) => {
  const animals = props.animals.map(animal => 
  <Animal 
    key={animal.id} 
    deleteAnimal={props.deleteAnimal} 
    id={animal.id} name={animal.name} 
    diet={animal.diet} 
    fun_fact={animal.fun_fact}
  />)
  return (
    <section>
      {animals}
    </section>
  )
}

export default AnimalsContainer;