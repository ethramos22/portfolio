import React from 'react'
import '../App.css';
import { Button, Container } from 'react-bootstrap';

export default function Hero() {
  function handleContact() {
    console.log("Pizza Time");
  }

  return (
    <Container className='py-5'>
      <div id='Hero'>
        <h1 id='Hero-Header'>Ethan Ramos</h1>
        <h2 className='Subheading'>Fullstack Web Developer</h2>
        <p>Welcome to my portfolio site.</p>
        <Button variant='secondary' onClick={() => handleContact()}>Contact Me</Button>
      </div>
    </Container>
  );
}
