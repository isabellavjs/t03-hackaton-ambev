import React from 'react';
import Header from '../components/Header';
import moagem from '../images/moagem.jpg';
import Footer from '../components/Footer';

function Milling() {
  return (
    <div className="milling-container">
      <Header title="Moagem" />
      <img src={ moagem } alt="Moedor" />
      <Footer />
    </div>
  )
};

export default Milling;
