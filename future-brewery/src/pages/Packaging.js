import React from 'react';
import Header from '../components/Header';
import envase from '../images/envase.jpg';
import Footer from '../components/Footer';
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import graphic1 from '../images/graphic1.svg';
import graphic2 from '../images/graphic2.svg';


function Packaging() {
  return (
    <div>
      <Header title="Envase" />
      <img src={ envase } alt="Envase" />
      <div>
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Lavadora
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <img src={graphic1} alt="Gráfico-energia" />
                <img src={graphic2} alt="Gráfico-água" />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  )
  };

  export default Packaging;
