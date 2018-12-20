import React, { Component } from 'react';

import SingleCard from './components/SingleCard';
import TitleBar from './components/TitleBar';
import logo from './logo.svg';

import './App.css';
import Opcard from './components/Opcard';
import OtherPlaces from './components/OtherPlaces';
import Footer from './components/Footer';

import Portfolio from './components/Portfolio';

// Global styles but theme- and update-able!

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleBar />
        <header className="ui  vertical center aligned segment">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <SingleCard />
        <Portfolio />
        <OtherPlaces />
        <Opcard />
        <Footer />
      </div>
    );
  }
}

export default App;
