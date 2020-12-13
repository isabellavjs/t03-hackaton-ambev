import React from 'react';
import Header from '../components/Header';
import moagem from '../images/moagem.jpg';
import Footer from '../components/Footer';
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import graphic1 from '../images/graphic-energia-azul.svg';

function Milling() {
  return (
    <div className="milling-container">
      <Header title="Moagem" />
      <img src={ moagem } alt="Moedor" />
      <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Moedores
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

export default Milling;
