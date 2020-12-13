import React from 'react';
import Header from '../components/Header';
import envase from '../images/envase.jpg';
import Footer from '../components/Footer';

function Packaging() {
  return (
    <div className="packaging-container">
      <Header title="Envase" />
      <img src={ envase } alt="Envase" />
      <Footer />
    </div>
  )
};

export default Packaging;
