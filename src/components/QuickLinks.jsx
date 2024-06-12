import React from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap'

export default function QuickLinks() {
    return (
        <div id='quickLinks'>
            <Container className='pb-4 mx-auto'>
                <h5>Quick Links</h5>
                <ButtonGroup>
                    <div className='large'>
                        <Button variant='secondary'>Projects</Button>
                        <Button variant='secondary'>About Me</Button>
                        <Button variant='secondary'>Contact</Button>
                    </div>
                </ButtonGroup>
            </Container>
        </div>
    );
}
