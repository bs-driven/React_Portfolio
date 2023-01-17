import React, { useState } from 'react';

export default function Contact(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [personalMessage, setMessage] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefalut();
    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      contactName: name,
      cantactEmail:email,
      contactMessage: personalMessage,
    });
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleChange = (e) => {
    setName(e.target.value);
    setEmail(e.target.value);
    setMessage(e.target.value);
  };


  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        If you'd like for the two us to connect please leave me your name and email.
        Then I'll reach out and we can go from there.
        Again I say thank you for your time.
      </p><br></br>


          <form className='contact-form'onSubmit={handleSubmit}>
            <input type="text"
            placeholder='NAME'
            value={name}
            name="contactName"
            className="contact-input"
            onChange={handleChange}
            ></input>
            <br></br>
            <input type="text"
            placeholder='EMAIL'
            value={email}
            name="contactEmail"
            className="contact-input"
            onChange={handleChange}
            ></input><br></br>
            <input type="text" placeholder='Message' value={personalMessage} name='contactMessage' className='contact-input'
            onChange={handleChange}></input>
            <br></br>
            <button className="contact-button">Submit</button>
          
          </form>
      
    </div>
  );
}
