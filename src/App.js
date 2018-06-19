import React, { Component } from 'react';

import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
