import React, { Component } from 'react';
import logo from './96529-200.png';
import './App.css';
import ModalSignIn from './components/ModalSignIn.js';
import ModalLogin from './components/ModalLogin.js';
import CarouselWelcome from './components/carousel.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Puro amor perruno</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <section>
          <ModalLogin/>
          <ModalSignIn/>
        </section>
        <CarouselWelcome/>
      </div>
    );
  }
}

export default App;
