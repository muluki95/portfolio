import React from 'react';
import './Aboutme.css';

const Aboutme = () => {
  return (
    <div className='aboutme'>
        <div className='aboutImage'>
            <img  className='img'alt=""src="./images/image.png" size ="3rem"></img>

        </div>
        <div className='aboutContent'>
            <span className='aboutHello'> Hello</span>
            <span className="aboutText"> I'm <span className='aboutName'>Esther</span><br/> Front End Web Developer </span>
            <p className="aboutParagraph">I am a skilled web developer with a passion for learning and creating innovative solutions<br/> to real world problems.</p>
            <button className='btn'> Hire Me </button>
            

        </div>

    </div>
  )
}

export default Aboutme 