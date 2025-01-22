import React from 'react'
import { Button, Container } from 'react-bootstrap'

export default function ContactForm() {
  return (
    <div id='contact' className='center'>
      <form method='get' className='contact-form'>
        <h2 className='form-header'>Contact Me</h2>
        <div className='form-row'>
          <label for='full-name'>Name</label>
          <input id='full-name' name='full-name' type='text' />
        </div>
        <div className='form-row'>
          <label for='email'>Email</label>
          <input id='email' name='email' type='email' />
        </div>
        <div className='form-row'>
          <label for='subject'>Subject</label>
          <input id='subject' name='subject' type='text' placeholder='Job Opportunity' />
        </div>
        <div className='form-row'>
          <label for='message'>Message</label>
          <textarea id='message' name='message' placeholder='Your message goes here...'></textarea>
        </div>
        <div className='form-row'>
          <Button variant='secondary'>Submit</Button>
        </div>
      </form>
    </div>
  );
}
