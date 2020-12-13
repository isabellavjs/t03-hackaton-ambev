import React from 'react';
import Header from '../components/Header';
import envase from '../images/envase.jpg';
import Footer from '../components/Footer';

function Packaging() {
  return (
    <div>
      <Header title="Envase" />
      <div className="packaging-container">
        <img src={ envase } alt="Envase" />
      </div>
      <Footer />
    </div>
  )
};

export default Packaging;
