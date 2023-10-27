import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className='skills'>
        
    <span className='skillsTitle'> What I Do</span><br/>
    <span className='skillsDesc'>  A sharp mind and creative front-end developer having a keen eye on design technologies, creating great user-friendly, responsive and cross-browser compatible web designs and layouts.
As a front end developer, I know the core concepts of UX/UI Designing and tools. I also have a strong grip on the
front-end fundamentals of CSS, JavaScript, and HTML. </span>
        <div className='skillBars'>
        <div className='skillBar'>
        <img src="" alt="" className='skillBarImage'/>
        <div className='skillBarText'>
            <h2> HTML</h2>
            <p></p>
        </div>
        </div>

        <div className='skillBar'>
        <img src="" alt="" className='skillBarImage'/>
        <div className='skillBarText'>
            <h2> CSS</h2>
            <p></p>
        </div>
        </div>

        <div className='skillBar'>
        <img src="" alt="" className='skillBarImage'/>
        <div className='skillBarText'>
            <h2> JAVASCRIPT</h2>
            <p></p>
            </div>
            </div>
        <div className='skillBar'>
        <img src="" alt="" className='skillBarImage'/>
        <div className='skillBarText'>
            <h2> REACT</h2>
            <p></p>
            </div>
            </div>

                <div className='skillBar'>
            <img src="" alt="" className='skillBarImage'/>
            <div className='skillBarText'>
            <h2> BOOTSTRAP</h2>
            <p></p>
        </div>
        </div>

            <div className='skillBar'>
            <img src="" alt="" className='skillBarImage'/>
            <div className='skillBarText'>
            <h2> UI DESIGN</h2>
            <p></p>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Skills