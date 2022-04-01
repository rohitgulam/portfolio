import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Navbar from '../componets/Navbar';

function Pages() {
  return (
      <>
        <BrowserRouter>
            <Navbar/>
            <Home/>
        </BrowserRouter>
      </>
  )
}

export default Pages