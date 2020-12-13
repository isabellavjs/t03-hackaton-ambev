import React from 'react';
import Header from '../components/Header';
import filtragem from '../images/filtragem.jpg';
import Footer from '../components/Footer';
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import graphic1 from '../images/graphic-energia-azul.svg';

function Filtration () {
  return (
    <div className="filtration-container">
      <Header title="Filtração" />
      <img src={ filtragem } alt="Filtragem" />
      <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Filtros
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <img src={graphic1} alt="Gráfico-energia" />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      <Footer />
    </div>
  )
}

export default Filtration;
