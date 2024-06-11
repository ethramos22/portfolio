import React from 'react'
import '../App.css';

export default function Hero() {
  function handleContact() {
    console.log("Pizza Time");
  }

  return (
    <div id='Hero'>
      <h1 id='Hero-Header'>Ethan Ramos</h1>
      <h2 className='Subheading'>Fullstack Web Developer</h2>
      <p>Welcome to my portfolio site.</p>
      <button onClick={() => handleContact()}>Contact Me</button>
    </div>
  );
}
