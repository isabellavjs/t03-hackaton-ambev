import React from 'react';
import Header from '../components/Header';
import Buttons from '../components/Buttons';
import Footer from '../components/Footer';

function Main () {
return(
  <div>
    <Header title="Home" />
    <div className="main-container">
    <Buttons />
      <div class="carousel-item">
        <img src="..." alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>...</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img src="..." alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>...</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img src="..." alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>...</h5>
        </div>
      </div>        
      <div class="carousel-item">
        <img src="..." alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>...</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img src="..." alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>...</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img src="..." alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>...</h5>
        </div>
      </div>
    </div>
      <Footer />
  </div>
)
}

export default Main;
