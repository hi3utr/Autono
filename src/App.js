import './css/App.scss';
import { Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './header';
import Vision from './vision';
import Services from './services';
import Why from './why';
import Facts from './facts';
import Industry from './industry';
import Careers from './careers';
import Footer from './footer';
function App() {
 
  return (
    <div className="App">
        <Header/>
        <Vision/>
        <Services/>
        <Why/>
        <Facts/>
        <Industry/>
        <Careers/>
        <Footer/>
    </div>
  );
}

export default App;
