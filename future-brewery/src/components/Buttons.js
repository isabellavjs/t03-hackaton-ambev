import React from 'react';
import { useHistory } from 'react-router-dom';

function Buttons() {
  const history = useHistory();

  return (
    <div className="buttons-container">
      <button type="button" className="btn btn-primary btn-main" onClick={() => history.push('/ingredientes')}>Ingredientes</button>
      <button type="button" className="btn btn-primary btn-main" onClick={() => history.push('moagem')}>Moagem</button>
      <button type="button" className="btn btn-primary btn-main" onClick={() => history.push('/fermentacao')}>Fermentação</button>
      <button type="button" className="btn btn-primary btn-main" onClick={() => history.push('/maturacao')}>Maturação</button>
      <button type="button" className="btn btn-primary btn-main" onClick={() => history.push('/filtracao')}>Filtração</button>
      <button type="button" className="btn btn-primary btn-main" onClick={() => history.push('/envase')}>Envase</button>
    </div>
  )
};

export default Buttons;
