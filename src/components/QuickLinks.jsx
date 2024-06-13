import React from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap'

export default function QuickLinks() {
    return (
        <div id='quickLinks'>
            <Container className='pb-4 mx-auto'>
                <h5>Quick Links</h5>
                <ButtonGroup>
                    <div className='large'>
                        <Button href='#projects' variant='secondary'>Projects</Button>
                        <Button href='#about' variant='secondary'>About Me</Button>
                        <Button href='#contact' variant='secondary'>Contact</Button>
                    </div>
                </ButtonGroup>
            </Container>
        </div>
    );
}
