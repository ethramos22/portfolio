import React from 'react'
import ProjectCard from './ProjectCard';
// Bootstrap
import { Row, Container } from 'react-bootstrap';
// Assets
import placeholderIMG1 from '../assets/legoPlaceholder.jpg'

export default function Projects() {
  var projects = [
    { 
      id: 1,
      name: "Portfolio Site",
      desc: "React / Bootstrap",
      info: "Short and sweet description",
      img: placeholderIMG1
    },
    {
      id: 2,
      name: "Senior Capstone",
      desc: "C# .NET / React",
      info: "Short and sweet description",
      img: placeholderIMG1
    },
    {
      id: 3,
      name: "Android Health App",
      desc: "Java / Android Studio",
      info: "Short and sweet description",
      img: placeholderIMG1
    },
    {
      id: 4,
      name: "Movie Web App",
      desc: "JavaScript / D3",
      info: "Short and sweet description",
      img: placeholderIMG1
    }
  ]
  
  return (
    <div id='projects'>
      <Container className='py-5 my-5'>
        <h2 className='Subheading'>Projects</h2>
        <Row xs={1} md={2} lg={4} className="g-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Row>
      </Container>
    </div>
  );
}
