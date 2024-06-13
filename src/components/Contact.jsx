import React from 'react'
import { Container, Card, Row, Col, Button } from 'react-bootstrap'
import { Linkedin } from 'react-feather';

export default function Contact() {
  return (
    <div id='contact' className='alt-background'>
      <Container className='py-5 my-5'>
        <h2>Contact Me</h2>
        <Row className='mt-5'>
          <Col className='me-5' sm={8}>
            <Card>
              <Card.Header>Email</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {' '}ethramos22@gmail.com{' '}
                  </p>
                  <footer className="blockquote-footer">
                    Let me know if you saw my site and what you thought!
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={2}>
            <a id='linkedin' href='https://www.linkedin.com/in/ethan-ramos-375698168/' target='_blank'>
              <Linkedin color='black' size={120}/>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
