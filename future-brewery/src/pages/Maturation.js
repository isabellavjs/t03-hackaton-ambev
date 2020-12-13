import React from 'react';
import Header from '../components/Header';
import maturacao from '../images/maturacao.jpg';

function Maturation() {
  return (
    <div className="maturation-container">
      <Header title="Maturação" />
      <img src={ maturacao } alt="Maturação" />
    </div>
  )
};

export default Maturation;
