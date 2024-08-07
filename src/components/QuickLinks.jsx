import React from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap'
import { CornerRightDown } from 'react-feather';

export default function QuickLinks() {
    return (
        <div id='quickLinks'>
            <Container className='pb-4 mx-auto'>
                <h5>Quick Links</h5>
                <ButtonGroup>
                    <Button href='#projects' variant='secondary'>
                        <span className='spacer-right'>Projects</span>
                        <CornerRightDown className='right-align' color='black'/>
                    </Button>
                    <Button href='#about' variant='secondary'>
                        <span className='spacer-right'>About Me</span>
                        <CornerRightDown className='right-align' color='black'/>
                    </Button>
                    <Button href='#contact' variant='secondary'>
                        <span className='spacer-right'>Contact Me</span>
                        <CornerRightDown className='right-align' color='black' />
                    </Button>
                </ButtonGroup>
            </Container>
        </div>
    );
}
