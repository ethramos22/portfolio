import React from 'react'
import ProjectCard from './ProjectCard';
import ProjectsHeader from './ProjectsHeader';

export default function Projects() {
  var projects = [
    { id: 1, name: "Portfolio Site", info: "Short and sweet description" },
    { id: 2, name: "Senior Capstone", info: "Short and sweet description" },
    { id: 3, name: "Android Health App", info: "Short and sweet description" },
    { id: 4, name: "Movie Web App", info: "Short and sweet description"}
  ]
  
  return (
    <div>
      <ProjectsHeader />
      <div id="projects" className='row'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project}/>
        ))}
      </div>
    </div>
  );
}
