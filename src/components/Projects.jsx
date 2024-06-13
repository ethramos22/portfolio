import React from 'react'
import ProjectCard from './ProjectCard';
// Bootstrap
import { Row, Container } from 'react-bootstrap';
// Assets
import placeholderIMG1 from '../assets/legoPlaceholder.jpg'
import fireballLogo from '../assets/FireBallToolsLogo.png'
import playersPage from '../assets/Players Tab.png'
import homePageCharacters from '../assets/Characters home.png'
import encounterSim from '../assets/Sample Encounter.png'
import encounterBuilder from '../assets/Encounter Builder.png'
import sampleMonster from '../assets/Search Monster.png'
import spellEncounter from '../assets/Spell Encounter Home.png'

export default function Projects() {
  var projects = [
    { 
      id: 1,
      name: "Portfolio Site",
      desc: "React / Bootstrap",
      info: "This very site! Refreshed skills in Bootstrap with a React framework. Custom CSS styles paired with bootstrap components for my design.",
      img: [placeholderIMG1]
    },
    {
      id: 2,
      name: "Senior Capstone",
      desc: "C# .NET / React",
      info: "Dungeon and Dragons game master virtual tools. React frontend paired with C# .NET backend. Search for official monsters and spells, import characters, and create combat encounters.",
      img: [fireballLogo, playersPage, homePageCharacters, encounterSim, encounterBuilder, sampleMonster, spellEncounter]
    },
    {
      id: 3,
      name: "Android Health App",
      desc: "Java / Android Studio",
      info: "Short and sweet description",
      img: [placeholderIMG1]
    },
    {
      id: 4,
      name: "Movie Web App",
      desc: "JavaScript / D3",
      info: "Short and sweet description",
      img: [placeholderIMG1]
    }
  ]
  
  return (
    <div id='projects' className='alt-background'>
      <Container className='py-5 my-5'>
        <h2>Projects</h2>
        <Row xs={1} md={2} lg={3} className="g-4 mt-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Row>
      </Container>
    </div>
  );
}
