import React from 'react';
import Header from '../components/Header';
import Buttons from '../components/Buttons';
import Footer from '../components/Footer';
import Carousel from 'react-bootstrap/Carousel';
import porco from '../images/porco.jpeg';
import rankingTrofeus from '../images/ranking-trofeus.jpeg';

function Main () {
  return(
  <div>
    <Header title={"Home"} />
    <div className="main-container">
      <Buttons />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carrosel"
            src={ porco }
            alt="porco"
          />
          <Carousel.Caption>
            <h3 className="carrosel-legenda">Metas</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carrosel"
            src={ rankingTrofeus }
            alt="ranking"
          />
          <Carousel.Caption>
            <h3 className="carrosel-legenda">Destaque por área</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    <Footer />
  </div>
)
}

export default Main;
