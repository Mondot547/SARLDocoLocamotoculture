import React, { useState } from 'react';
import Nav from '../components/menu/Nav';
import './scss/Contact.scss';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message}),
    });
    const data = await response.json();
    console.log(data);
  };
  
    return (
        <>
            <header>
              <Nav />
            </header>
            <main className="contact">
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor='name'>Nom</label>
                  <input
                    type='text'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                  <label htmlFor='email'>E-mail</label>
                  <input
                    type='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                  <label htmlFor='message'>Message</label>
                  <textarea
                    id='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button type='submit'>Envoyer</button>
              </form>
            </main>
        </>
    );
};

export default Contact;