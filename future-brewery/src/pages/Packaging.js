import React from 'react';
import Header from '../components/Header';
import envase from '../images/envase.jpg';
import Footer from '../components/Footer';
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import fermentacao from '../images/fermentacao.jpg';


function Packaging() {
  return (
    <div>
      <Header title="Envase" />
      <img src={ envase } alt="Envase" />
      <div className="packaging-container">
        <div className="lavadora-container">
          <h5>Lavadora</h5>
        </div>
      </div>
      <div>
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Lavadora
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <img src={fermentacao} alt="fermentação" />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              TAB 2
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>This is second tab body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
      <Footer />
    </div>
  )
};

export default Packaging;
