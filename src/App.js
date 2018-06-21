import React, { Component } from 'react';

import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import ModalListPlace from './components/ModalListPlace';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/list-places" component={ModalListPlace} />
        </Switch>
      </Router>
    );
  }
}

export default App;
