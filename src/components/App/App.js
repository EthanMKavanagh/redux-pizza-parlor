import React, { Component } from 'react';
import axios from 'axios';
import {Route, HashRouter as Router, Link} from 'react-router-dom';
import './App.css';
import Admin from '../Admin/Admin'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route path="/admin">
          <Admin />
        </Route>
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br/>
        <img src="images/pizza_photo.png"/>
        <p>Pizza is great.</p>
      </div>
      </Router>
    );
  }
}

export default App;
