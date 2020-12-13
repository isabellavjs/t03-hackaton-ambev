import React from 'react';
import Header from '../components/Header';
import ingredientes from '../images/ingredientes.jpg';

function Ingredients() {
  return (
    <div className="ingredients-container">
      <Header title="Ingredientes" />
      <img src={ ingredientes } alt="Ingredientes" />
    </div>
  )
};

export default Ingredients;
