import './App.css';
// Changes
import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact'
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
