import React from 'react';
import Header from '../components/Header';
import maturacao from '../images/maturacao.jpg';
import Footer from '../components/Footer';

function Maturation() {
  return (
    <div className="maturation-container">
      <Header title="Maturação" />
      <img src={ maturacao } alt="Maturação" />
      <Footer />
    </div>
  )
};

export default Maturation;
