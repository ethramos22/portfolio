import React from 'react'
import ProjectCard from './ProjectCard';
// Bootstrap
import { Row, Container } from 'react-bootstrap';
// Assets
import placeholderIMG1 from '../assets/legoPlaceholder.jpg'
import nameLogo from '../assets/fireballLogo.png'
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
      img: [
        { title: "Portfolio", photo: placeholderIMG1, pageDesc: "" }
      ]
    },
    {
      id: 2,
      name: "Senior Capstone",
      desc: "C# .NET / React",
      info: "Dungeon and Dragons game master virtual tools. React frontend paired with C# .NET backend. Search for official monsters and spells, import characters, and create combat encounters.",
      img: [
        { title: "Logo", photo: nameLogo, pageDesc: "Custom logo created in Canva" },
        { title: "Players Page", photo: playersPage, pageDesc: "Using an API Players can directly import there current campagin and characters straiht from DNDBeyond with the click of a button! Here players and the Game master can view their stats. The Game master can also add and remove players from the current campaign." },
        { title: "Dashboard", photo: homePageCharacters, pageDesc: "" },
        { title: "Encounters", photo: encounterSim, pageDesc: "" },
        { title: "Create Encounters", photo: encounterBuilder, pageDesc: "" },
        { title: "Search Monsters", photo: sampleMonster, pageDesc: "" },
        { title: "Search Spells", photo: spellEncounter, pageDesc: "" }
      ]
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
