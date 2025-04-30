import React from 'react'
import './App.css'
import Section3 from './components/Section3';
import Join from './components/Join';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Section2 from './components/Section2';
import Section4 from './components/Section4';
import Hero2 from './components/Hero2';
import EventCard from './components/EventCard';

function App() {

  return (
    <>
      <Hero/>
      <Section2/>
      <Section3 />
      <Section4 />
      <Join />
      <Footer />
      <Hero2 />
      <EventCard/>
    </>
  )
}

export default App
