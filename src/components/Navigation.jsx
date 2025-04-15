import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';

export default function Navigation() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" sticky='top'>
            <Container>
                <Navbar.Brand href='#hero'><h4 className='plaster-regular brand'>ER</h4></Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link href='#projects'>Projects</Nav.Link>
                    <Nav.Link href='#about'>About Me</Nav.Link>
                    <Nav.Link href='#contact'>Contact Me</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
