import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// Changes
import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact'
import Navigation from './components/Navigation';
import QuickLinks from './components/QuickLinks';
import ContactForm from './components/ContactForm';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <QuickLinks/>
      <Projects />
      <About />
      <ContactForm />
      <Contact />
    </div>
  );
}

export default App;
