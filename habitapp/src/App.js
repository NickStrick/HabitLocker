import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Route } from "react-router-dom";
import axios from 'axios';
// require('dotenv').config();

import NavBar from './components/Navbar/NavBar.js';
import NavBelt from './components/NavBelt/NavBelt.js';
import Home from './components/Home/Home.js';

function App() {
  const [getData, setData] = useState();
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${process.env.BACKEND_URL}/category/1`,
      );
 
      setData(result.data);
    };
 
    fetchData();
  });
  console.log(getData)
  return (
    <div className="App">
      <NavBar />
      <NavBelt />
      <div className='container'>
        <div className='sidegap'></div>
        <div className='page-content'>
          <Route exact path='/' render={props => <Home {...props} />} />
        </div>
      </div>
    </div>
  );
}

export default App;
