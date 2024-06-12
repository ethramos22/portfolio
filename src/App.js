import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Changes
import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact'
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
