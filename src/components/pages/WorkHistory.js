import React from 'react';

export default function WorkHistory() {
  return (
    <div className='resume-div'>
      <h1 className="resume-h1">Work Summary</h1>
      <p className="resume-p"> 
        I'm new to the field and have a diverse background which have helped me develope a few different soft-skills. Such as the attention to detail, time managenment, and problem-solving from the different installation jobs I've had. These positions also required me to a self-starter. Even a bit creative at times as well to accomplish the end goal.
        As a bartender I further developed communcation skills along with organzation skills.
      </p>
      <p className="resume-p">
        I'd like to show you a few of the projects I've worked on:<br></br>
        <ul className='example-work-list'>
          <li><button className='example-button'><a href= 'https://github.com/bs-driven/NoteTaker'>Express.js</a></button></li>

          <li><button className='example-button'><a href= 'https://github.com/bs-driven/OOP_TeamEx'>OOP(object-oriented programming)</a></button></li>
          
          <li><button className='example-button'><a href='https://github.com/bs-driven/sql_project'>SQL</a></button></li>
          
          <li><button className='example-button'><a href= 'https://github.com/bs-driven/E_Commerce'>ORM(object-relational mapping)</a></button></li>
          
          <li><button className='example-button'><a href='https://github.com/bs-driven/SocialNetworking_NoSql'>NOSQL</a></button></li>
          
          <li><button className='example-button'><a href='https
          ://github.com/bs-driven/PasswordGenerator'>JavaScript</a></button></li>

        </ul>   
       
      </p>
    </div>
  );
}
