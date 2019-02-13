import React, { Component } from 'react';
import Home from './home/home'
import play from './play/play'
import help from './help/help'
import './App.css';
import {
  HashRouter  as Router,
  Route,
} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact  path="/" component={Home}/>
          <Route  path="/play/:url" component={play}/>
          <Route  path="/help" component={help}/>
        </div>
      </Router>
    );
  }
}

export default App;
