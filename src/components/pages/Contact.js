import React, { useState, useEffect } from 'react';

export default function Contact(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [personalMessage, setMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('potenialEmployeer', JSON.stringify( {name, email, personalMessage}))
  })
  
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
    })
    // const potenialEmployeer = {
    //   C_name: contactName.value,
    //   C_email: contactEmail.value,
    //   C_message: contactMessage.value
    // }
    ;
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


          <form className='contact-form'>
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
            <input type="text"
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
