import React from 'react';
import '../styles/Header.css';





export default function About() {
  return (
    <div>
      <h1 className='aboutMeH1'>About Me</h1>
      <p className = "aboutMePara">
          A little about myself I am 32 years old; born and rasied in Columbus,OH. I find describing myself to be a bit of a tricky task. I'm a bit of a over-thinker never to sure what to share and what not to. I'm completely new to the field of tech; I admit. I began down this road in order to change the outcome of my life in a manner of speaking. I'd say I have had the luxury to experience and witness many different routes a persons life can take. From those I haven't found myself content or willing to accept it as the only outcomes I'm personally stuck with. Working at a warehouse barely able to make ends meet; struggling to provide for my family; working a job with next to no chance of advancement; being stuck at a job that doesn't challenege me; these are things I personally fear. Without making a change I'm fearful that the outcome of my life may just become that so here I am.
          A young man ready to dedicate himself to learning new skills, who isn't afraid of long hours. I genuinely want to be able to do work I'm proud of and have skills that I can take anywhere I may go. Hopefully this gives you a bit of a insight into who I am. I apperciate you taking this time.
    </p>
    <img clasName="aboutMeImg"  src={require("../images/IMG_0568.JPG")} alt={"Me In A Suit"} />
    </div>
  );
}
