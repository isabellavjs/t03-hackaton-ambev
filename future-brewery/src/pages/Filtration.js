import React from 'react';
import Header from '../components/Header';
import filtragem from '../images/filtragem.jpg';

function Filtration () {
  return (
    <div className="filtration-container">
      <Header title="Filtração" />
      <img src={ filtragem } alt="Filtragem" />
    </div>
  )
}

export default Filtration;
