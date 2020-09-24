import React, { Component } from 'react';
import axios from 'axios';
import {Route, Link, HashRouter as Router} from 'react-router-dom';
import './App.css';
import AddressForm from '../AddressForm/AddressForm';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br/>
        <Route path='/address-form' exact>
          <AddressForm />
        </Route>
      </div>
      </Router>
    );
  }
}

export default App;
