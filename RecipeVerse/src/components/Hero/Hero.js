import React from 'react';
import "./Hero.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="Herosection" src={props.heroimg} />
        <div className='hero-text'>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
         
        </div>
        
      </div>
    </>
  );
}

export default Hero;
