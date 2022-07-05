import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const emailTemplate = {
      'to_name' : 'Everett',
      'from_name' : formState.name,
      'reply_to' : formState.email,
      'message' : formState.message
    }
    emailjs.send('service_p0qq5r8','template_98e17vj', emailTemplate, 'J5M1IqHv_vh9-veS6')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
  }

  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea defaultValue={message} onBlur={handleChange} name="message" rows="5"  />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default ContactForm;