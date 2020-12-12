import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Ingredients from './pages/Ingredients';
import Milling from './pages/Milling';
import Lautering from './pages/Lautering';
import Fermenting from './pages/Fermeting'
import Maturation from './pages/Maturation';
import Filtration from './pages/Filtration';
import Packaging from './pages/Packaging';


function Routes () {
  return(
    <Switch>
      <Route exact path='/' component={ Main } />
      <Route path='/ingredientes' component={Ingredients} />
      <Route path='/moagem' component={Milling} />
      <Route path='/mosturacao' component={ Lautering } />
      <Route path='/fermentacao' component={ Fermenting } />
      <Route path='/maturacao' component={ Maturation } />
      <Route path='/filtracao' component={ Filtration } />
      <Route path='/envase' component={ Packaging } />
    </Switch>
  )
}

export default Routes;
