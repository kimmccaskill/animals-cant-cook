import React from 'react';

const Animal = (props) => {
  return (
    <article>
      <h2>{props.name}</h2>
      <p>Diet: {props.diet}</p>
      <p>Fun fact: {props.fun_fact}</p>
      <button onClick={() => props.deleteAnimal(props.id)}>This animal is actually good at cooking. Remove this one.</button>
    </article>
  )
}

export default Animal;
