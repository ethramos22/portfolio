import React from 'react'
import '../App.css';
import { Button, Container } from 'react-bootstrap';

export default function Hero() {
  function handleContact() {
    console.log("Pizza Time");
  }

  return (
    <div id='hero'>
      <Container className='py-5'>
        <h1 id='Hero-Header'>Ethan Ramos</h1>
        <h2 className='Subheading'>Fullstack Web Developer</h2>
        <p>Welcome to my portfolio site.</p>
        <Button href='#contact' variant='secondary' onClick={() => handleContact()}>Contact Me</Button>
      </Container>
    </div>
  );
}
