import React from 'react';
import Header from '../components/Header';
import fermentacao from '../images/fermentacao.jpg';
import Footer from '../components/Footer';
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import graphic1 from '../images/graphic-energia-azul.svg';

function Fermeting() {
  return (
    <div className="fermenting-container">
      <Header title="Fermentação" />
      <img src={ fermentacao } alt="Fermentação" />
      <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Caldeiras
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
};

export default Fermeting;
