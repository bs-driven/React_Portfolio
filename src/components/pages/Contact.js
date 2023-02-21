import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(props) {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [personalMessage, setMessage] = useState('');

  
  const handleChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'contactName'){
      setName(inputValue)
    }
    if (inputType === 'contactEmail'){
      setEmail(inputValue)
    }
    if (inputType === 'contactMessage'){
      setMessage(inputValue)
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_me', 'contact_form', form.current, 'JlfE4uWPyQTUkuMWU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      alert(`Thank you, ${name}`);
          setName('');
          setEmail('');
          setMessage('');
  };



  return (
    <div>
      <h1 className = 'contact-h1'>Contact Me</h1>
      <p className = 'contact-p'>
        If you'd like for the two us to connect please leave me your name and email.
        Then I'll reach out and we can go from there.
        Again I say thank you for your time.
      </p><br></br>


          <form ref={ form } className='contact-form'>
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
            <input type="textarea"
            placeholder='Message'
            value={personalMessage}
            name='contactMessage'
            className='contact-input'
            onChange={handleChange}
            ></input>
            <br></br>
            <button className="contact-button" onClick={sendEmail}>Submit</button>
          
          </form>
      
    </div>
  );
}



