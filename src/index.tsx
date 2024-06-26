import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Collection } from './pages/Collection';
import { CreateCard } from './pages/CreateCard';
import NavbarComponent from './components/NavBarComponent';

const App = () => (
  <>
  <Router>
  <NavbarComponent></NavbarComponent>
    <Switch>
      <Route exact path="/collection" component={Collection} />
      <Route exact path="/create-card" component={CreateCard} />
    </Switch>
  </Router>
  </>
);

render(<App />, document.getElementById('root'));
