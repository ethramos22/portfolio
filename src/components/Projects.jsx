import React from 'react'
import ProjectCard from './ProjectCard';
// Bootstrap
import { Row, Container } from 'react-bootstrap';
// Assets
import placeholderIMG1 from '../assets/legoPlaceholder.jpg'
// Portfolio
import brandPhoto from '../assets/BrandScreenshot.png'
// Capstone
import nameLogo from '../assets/fireballLogo.png'
import playersPage from '../assets/Players Tab.png'
import homePageCharacters from '../assets/Characters home.png'
import encounterSim from '../assets/Sample Encounter.png'
import encounterBuilder from '../assets/Encounter Builder.png'
import sampleMonster from '../assets/Search Monster.png'
import spellEncounter from '../assets/Spell Encounter Home.png'
// DND Class Piccker
import classPickerPic from '../assets/classPickerScreenshot.png'

export default function Projects() {
  var projects = [
    { 
      id: 1,
      name: "Portfolio Site",
      desc: "React / Bootstrap",
      live: "false",
      link: "",
      info: "This very site! Refreshed skills in Bootstrap with a React framework. Custom CSS styles paired with bootstrap components for my design.",
      img: [
        { title: "Portfolio", photo: brandPhoto, pageDesc: "" }
      ]
    },
    {
      id: 2,
      name: "Senior Capstone",
      desc: "C# .NET / React / SQL",
      live: "false",
      link: "",
      info: "Dungeon and Dragons game master virtual tools. React frontend paired with C# .NET backend. Search for official monsters and spells, import characters, and create combat encounters.",
      img: [
        { title: "Logo", photo: nameLogo, pageDesc: "Custom logo created in Canva" },
        { title: "Players Page", photo: playersPage, pageDesc: "Using our backend API Players can directly import there current campagin and characters straiht from DNDBeyond with the click of a button! Here players and the Game master can view their stats. The Game master can also add and remove players from the current campaign." },
        { title: "Dashboard", photo: homePageCharacters, pageDesc: "The home dashboard where the Game master can switch between campaigns, determine players health, add notes on players, search up specific rules, and run encounters." },
        { title: "Encounters", photo: encounterSim, pageDesc: "Game master can run their created encounters, using turn based comabt, easily showing progress and time elapsed. Game masters can also click on their monsters to pull up their stats." },
        { title: "Create Encounters", photo: encounterBuilder, pageDesc: "Pulling from over 500 monsters, the game master can strategise and plan difficulty for whatever level of a party. A game master can also quickly generate a combat encounter using our random encounter generator." },
        { title: "Search Monsters", photo: sampleMonster, pageDesc: "Using our own search engine, you can quickly search our database of monster creatures and learn more about them." },
        { title: "Search Spells", photo: spellEncounter, pageDesc: "Spells and rules are also able to be searched, allowing a user to quickly learn about their power." }
      ]
    },
    {
      id: 3,
      name: "Dungeon & Dragons Class Picker",
      live: "true",
      link: "https://ethramos22.github.io/dnd-class-picker/",
      desc: "React HTML / CSS",
      info: "A simple quiz to determine what your for Dungeons and Dragons 5th edition class should be.",
      img: [
        { title: "Fighter", photo: classPickerPic, pageDesc: "" }
      ]
    }
  ]
  
  return (
    <div id='projects' className='alt-background'>
      <Container className='py-5 my-5'>
        <h2>Projects</h2>
        <Row xs={1} md={2} lg={3} className="g-4 mt-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} className="project-card" />
          ))}
        </Row>
      </Container>
    </div>
  );
}
