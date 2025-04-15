import React from 'react'
import '../App.css';
import { Button, Col, Row, Container } from 'react-bootstrap';
import Logo from '../assets/ERLogo.svg'

export default function Hero() {
  function handleContact() {
    console.log("Pizza Time");
  }

  return (
    <div id='hero'>
      <Container className='py-5'>
        <Row>
          <Col>
            <h1>Ethan Ramos</h1>
            <p>Fullstack Web Developer</p>
          </Col>
          <Col>
            <h2 className='plaster-regular brand-big'>ER</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
