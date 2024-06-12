import React from 'react'
import placeholderIMG from '../assets/legoPlaceholder.jpg'
// Bootstrap
import { Card, Col, Button } from 'react-bootstrap';

export default function ProjectCard({project}) {
    return (
        <Col key={project.id}>
            <Card border='none'>
                <Card.Img variant="top" src={placeholderIMG} alt='sad lego man' />
                <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Subtitle>{project.desc}</Card.Subtitle>
                    <Card.Text>{project.info}</Card.Text>
                    <Button variant='secondary'>Like</Button>{' '}
                    <Button variant='secondary'>+</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}
