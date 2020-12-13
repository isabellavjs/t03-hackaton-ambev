import React from 'react';
import Header from '../components/Header';
import envase from '../images/envase.jpg';

function Packaging() {
  return (
    <div className="packaging-container">
      <Header title="Envase" />
      <img src={ envase } alt="Envase" />
    </div>
  )
};

export default Packaging;
