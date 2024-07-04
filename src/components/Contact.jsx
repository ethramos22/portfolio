import React from 'react'
import { Container, Card, Row, Col, Button } from 'react-bootstrap'
import { Linkedin } from 'react-feather';

export default function Contact() {
  return (
    <div id='contact' className='alt-background'>
      <Container className='py-3 my-3'>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <a id='email' className='hover-bar' href='mailto:ethramos22@gmail.com'>
              ethramos22@gmail.com
            </a>
          </Col>
          <Col xs lg="2">
            <a className='hover-bar' href='https://www.linkedin.com/in/ethan-ramos-375698168/' target='_blank'>
              <Linkedin color='black' size={30}/>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
