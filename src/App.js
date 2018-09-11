import React, { Component } from 'react';
import './App.css';
import GoogleMapLoader from "./components/googleMap";

class App extends Component {
  render() {
    return (
      <div className="App">
          <GoogleMapLoader/>
      </div>
    );
  }
}

export default App;
