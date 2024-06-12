import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';

export default function Navigation() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href='#home'>Home</Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link href='#projects'>Projects</Nav.Link>
                    <Nav.Link href='#aboutme'>About Me</Nav.Link>
                    <Nav.Link href='#contact'>Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
