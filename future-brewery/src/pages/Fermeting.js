import React from 'react';
import Header from '../components/Header';
import fermentacao from '../images/fermentacao.jpg';
import Footer from '../components/Footer';

function Fermeting() {
  return (
    <div className="fermenting-container">
      <Header title="Fermentação" />
      <img src={ fermentacao } alt="Fermentação" />
      <Footer />
    </div>
  )
};

export default Fermeting;
