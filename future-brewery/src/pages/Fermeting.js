import React from 'react';
import Header from '../components/Header';
import fermentacao from '../images/fermentacao.jpg';

function Fermeting() {
  return (
    <div className="fermenting-container">
      <Header title="Fermentação" />
      <img src={ fermentacao } alt="Fermentação" />
    </div>
  )
};

export default Fermeting;
