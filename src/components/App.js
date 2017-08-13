import React, { Component } from 'react';
import Footer from './Footer';
import Control from './Control';
import Board from './Board';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board/>
        <Control/>
        <Footer/>
      </div>
    );
  }
}

export default App;
