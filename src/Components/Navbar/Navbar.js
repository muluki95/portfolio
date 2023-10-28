import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='Navbar'>
        <h1> Portfolio </h1>
        <div className='links'>
            
            <a href="#about">About Me</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            
        </div>

    </div>
  )
}

export default Navbar