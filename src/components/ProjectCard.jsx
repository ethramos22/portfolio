import React from 'react'
import { useState } from 'react';
// Bootstrap
import { Card, Col, Button, Modal, Carousel} from 'react-bootstrap';

export default function ProjectCard({ project }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Col key={project.id}>
                <Card className='h100'>
                    <Card.Img style={{ objectFit: 'cover', maxHeight: '200px', borderRadius: '0' }} variant="top" src={project.img[0].photo} alt='sad lego man' />
                    <Card.Body className='d-flex flex-column'>
                        <Card.Title>{project.name}</Card.Title>
                        <Card.Subtitle>{project.desc}</Card.Subtitle>
                        <Card.Text>{project.info}</Card.Text>
                        <Button className='mt-auto' style={{ width: '50%'}} variant='secondary' onClick={handleShow}>View Project</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Modal centered size='lg' show={show} onHide={handleClose} >
                <Modal.Body>
                    <Carousel>
                        {project.img.map((image) => (
                            <Carousel.Item key={image.id}>
                                <img src={image.photo} className="d-block h-100 w-100" />
                                <Carousel.Caption className='photoInfo'>
                                    <h5>{image.title}</h5>
                                    <p>{image.pageDesc}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Modal.Body>
            </Modal>
        </>
    );
}
