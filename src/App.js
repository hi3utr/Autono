import './App.css';
import { useState, useEffect } from 'react'
import Header from './header';
import Vision from './vision';
import Services from './services';
function App() {
 
  return (
    <div className="App">
        <Header/>
        <Vision/>
        <Services/>
        <div className="why"></div>
        <div className="facts"></div>
        <div className="industry"></div>
        <div className="careers"></div>
      
      <footer>
        <div className="about"></div>
        <div className="subcribe"></div>
      </footer>
    </div>
  );
}

export default App;
