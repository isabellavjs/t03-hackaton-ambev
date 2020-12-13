import React from 'react';
import Header from '../components/Header';
import ingredientes from '../images/ingredientes.jpg';
import Footer from '../components/Footer';
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import graphic1 from '../images/graphic-energia-azul.svg';


function Ingredients() {
  return (
    <div className="ingredients-container">
      <Header title="Ingredientes" />
      <img src={ ingredientes } alt="Ingredientes" />
      <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Armazenamento
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

export default Ingredients;
