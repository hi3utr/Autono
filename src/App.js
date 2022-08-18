import './css/App.scss';
import { Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './header';
import Vision from './vision';
import Services from './services';
import Why from './why';
import Facts from './facts';
import Industry from './industry';
function App() {
 
  return (
    <div className="App">
        <Header/>
        <Vision/>
        <Services/>
        <Why/>
        <Facts/>
       <Industry/>
        <div className="careers"></div>
      
      <footer>
        <div className="about"></div>
        <div className="subcribe"></div>
      </footer>
    </div>
  );
}

export default App;
