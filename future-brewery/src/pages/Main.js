import React from 'react';
import Header from '../components/Header';
import Buttons from '../components/Buttons';
import Footer from '../components/Footer';
import ingredientes from '../images/ingredientes.jpg';
import moagem from '../images/moagem.jpg';
import fermentacao from '../images/fermentacao.jpg';
import Carousel from 'react-bootstrap/Carousel';


function Main () {
  return(
  <div>
    <Header title={"Home"} />
    <div className="main-container">
      <Buttons />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ingredientes}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={moagem}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fermentacao}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    <Footer />
  </div>
)
}

export default Main;
