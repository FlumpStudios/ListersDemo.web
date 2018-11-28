import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VehicleTable from './Containers/VehicleTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <VehicleTable />
      </div>
    );
  }
}

export default App;
