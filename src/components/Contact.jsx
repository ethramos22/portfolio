import React from 'react'
import { Container, Card, Row, Col, Button } from 'react-bootstrap'
import { Linkedin } from 'react-feather';

export default function Contact() {
  return (
    <div id='contact' className='alt-background'>
      <Container className='py-3 my-3 footer'>
        <a className='footer-item hover-bar' href='mailto:ethramos22@gmail.com'>
          ethramos22@gmail.com
        </a>
        <a className='footer-item hover-bar' href='https://www.linkedin.com/in/ethan-ramos-375698168/' target='_blank'>
          linkedin
        </a>
      </Container>
    </div>
  );
}
