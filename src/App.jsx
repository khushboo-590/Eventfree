import React from 'react'
import './App.css'
import Lorem from './components/Lorem';
import ExplorEvent from './components/ExplorEvent';
import Join from './components/Join';
import WhatSpecail from './components/WhatSpecail';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {

  return (
    <>
      <Hero/>
      <WhatSpecail/>
      <Lorem />
      <ExplorEvent />
      <Join />
      <Footer/>
    </>
  )
}

export default App
