import React from 'react'
import '../App.css';
import { Button, Col, Row, Container } from 'react-bootstrap';

export default function Hero() {

  return (
    <div id='hero'>
      <Container className='py-5'>
        <Row>
          <Col xs={12} md={6} className='text-center text-md-start'>
            <h1>Ethan Ramos</h1>
            <p>Fullstack Web Developer</p>
          </Col>
          <Col xs={12} md={6} className='text-center'>
            <h2 className='plaster-regular brand-big wash-over'>ER</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
