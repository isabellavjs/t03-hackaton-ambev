import { useHistory } from 'react-router-dom';

function Buttons() {
  const history = useHistory();

  return (
    <div>
      <button onClick={() => history.push('/ingredientes')}>Ingredientes</button>
      <button onClick={() => history.push('moagem')}>Moagem</button>
      <button onClick={() => history.push('/fermentacao')}>Fermentação</button>
      <button onClick={() => history.push('/maturacao')}>Maturação</button>
      <button onClick={() => history.push('/filtracao')}>Filtração</button>
      <button onClick={() => history.push('/envase')}>Envase</button>
    </div>
  )
};

export default Buttons;
