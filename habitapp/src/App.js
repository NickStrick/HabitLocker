import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Route } from "react-router-dom";

import NavBar from './components/Navbar/NavBar.js';
import NavBelt from './components/NavBelt/NavBelt.js';
import Home from './components/Home/Home.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <NavBelt />
      <div className='container'>
        <div className='sidegap'></div>
        <Route exact path='/' render={props => <Home {...props} />} />
      </div>
    </div>
  );
}

export default App;
