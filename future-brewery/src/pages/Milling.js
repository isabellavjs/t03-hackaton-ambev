import React from 'react';
import Header from '../components/Header';
import moagem from '../images/moagem.jpg';

function Milling() {
  return (
    <div className="milling-container">
      <Header title="Moagem" />
      <img src={ moagem } alt="Moedor" />
    </div>
  )
};

export default Milling;
