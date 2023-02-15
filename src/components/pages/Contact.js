import React, { useState } from 'react';

export default function Contact(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [personalMessage, setMessage] = useState('');
  
  const handleChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name'){
      setName(inputValue)
    }
    if (inputType === 'email'){
      setEmail(inputValue)
    }
    if (inputType === 'message'){
      setMessage(inputValue)
    }

    // setName(e.target.value);
    // setEmail(e.target.value);
    // setMessage(e.target.value);
  };

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



  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        If you'd like for the two us to connect please leave me your name and email.
        Then I'll reach out and we can go from there.
        Again I say thank you for your time.
      </p><br></br>


          <form className='contact-form'>
            <input type="name"
            placeholder='NAME'
            value={name}
            name="contactName"
            className="contact-input"
            onChange={handleChange}
            ></input>
            <br></br>
            <input type="email"
            placeholder='EMAIL'
            value={email}
            name="contactEmail"
            className="contact-input"
            onChange={handleChange}
            ></input><br></br>
            <input type="message"
            placeholder='Message'
            value={personalMessage}
            name='contactMessage'
            className='contact-input'
            onChange={handleChange}
            ></input>
            <br></br>
            <button className="contact-button" onClick={handleSubmit}>Submit</button>
          
          </form>
      
    </div>
  );
}
