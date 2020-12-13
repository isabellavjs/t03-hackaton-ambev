import React from 'react';
import Header from '../components/Header';
import maturacao from '../images/maturacao.jpg';
import Footer from '../components/Footer';
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import graphic1 from '../images/graphic-energia-azul.svg';

function Maturation() {
  return (
    <div>
      <Header title="Maturação" />
      <img src={ maturacao } alt="Maturação" />
      <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Resfriadores
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

export default Maturation;
