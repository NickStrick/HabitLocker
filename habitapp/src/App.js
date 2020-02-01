import React from 'react';
import logo from './logo.svg';
import './App.scss';

import NavBar from './components/Navbar/NavBar.js';
import NavBelt from './components/NavBelt/NavBelt.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <NavBelt />
      <div className='container'>

      </div>
    </div>
  );
}

export default App;
