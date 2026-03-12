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
              different perspectives. People working in technology need to understand it's impacts.</p>
          </li>
          <li className='about-item'>
            <p><strong>Proactive Arranger.</strong> I thrive in community and love being flexible
            in my approach. I stay organized, planning sessions of Dungeons & Dragons with my friends
            as game master. I enjoy figuring out how to align people and get the best results. I'm
            quick to jump in and help where needed.</p>
          </li>
        </ul>
      </Container>
    </div>
  );
}
