import React from 'react'
import placeholderIMG from '../assets/legoPlaceholder.jpg'
// Bootstrap
import { Card, Col, Button, ButtonGroup } from 'react-bootstrap';

export default function ProjectCard({project}) {
    return (
        <Col key={project.id}>
            <Card>
                <Card.Header></Card.Header>
                <Card.Img variant="top" src={placeholderIMG} alt='sad lego man' />
                <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Subtitle>{project.desc}</Card.Subtitle>
                    <Card.Text>{project.info}</Card.Text>
                    <ButtonGroup>
                        <Button variant='secondary'>Like</Button>
                        <Button variant='secondary'>+</Button>
                    </ButtonGroup>
                </Card.Body>
            </Card>
        </Col>
    );
}