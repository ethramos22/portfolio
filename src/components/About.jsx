import React from 'react'
import { Container } from 'react-bootstrap'

export default function About() {
  return (
    <div id='about'>
      <Container className='mx-auto py-5'>
        <h1 className='center'>About Me</h1>
        <ul className='text-list'>
          <li className='about-item'>
            <p><strong>Creative and curious. </strong>I enjoy using creativity wherever I can.
              From fashion to dungeons and dragons,
              being unique and creative is important to me.
              I’m always trying to be the expert of my favorite topics and activities.
              I get together with friends for games, and love watching TV and Film.
              Tell me your favorites!</p>
          </li>
          <li className='about-item'>
            <p><strong>Passion for social justice. </strong>Being educated on topics that differ
              from your background is central to the human experience.
              I loved being surrounded by students of different cultures and lived
              experiences at the University of Utah.
              I believe the success of a team can be attributed to individuals with
              different perspectives. Technology time and time again has negatively
              impacted those marginalized by society.
              Artificial Intelligence, and product development need to consider the
              impacts on certain groups.</p>
          </li>
          <li className='about-item'>
            <p><strong>My life and looking ahead. </strong>I’ve travelled to nine different countries,
              Switzerland being my favorite so far. I graduated from the University of Utah
              with a bachelors in computer science, and a minor in math.
              I’ve worked in retail, served on presidential search committees,
              and interned with United Airlines.
              I’m seeking a company that matches my values where I can
              grow and challenge myself.</p>
          </li>
        </ul>
      </Container>
    </div>
  );
}
