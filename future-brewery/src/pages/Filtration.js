import React from 'react';
import Header from '../components/Header';
import filtragem from '../images/filtragem.jpg';
import Footer from '../components/Footer';

function Filtration () {
  return (
    <div className="filtration-container">
      <Header title="Filtração" />
      <img src={ filtragem } alt="Filtragem" />
      <Footer />
    </div>
  )
}

export default Filtration;
