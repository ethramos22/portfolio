import React from 'react'
// Bootstrap
import { Card, Col, Button} from 'react-bootstrap';

export default function ProjectCard({project}) {
    return (
        <Col key={project.id}>
            <Card>
                <Card.Header></Card.Header>
                <Card.Img variant="top" src={project.img[0]} alt='sad lego man'/>
                <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Subtitle>{project.desc}</Card.Subtitle>
                    <Card.Text>{project.info}</Card.Text>
                    <Button variant='secondary'>View Project</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}
