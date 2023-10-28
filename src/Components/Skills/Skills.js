import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className='skills'>
       
    <span className='skillsTitle'> What I Do</span><br/>
    <span className='skillsDesc'>  A sharp mind and creative front-end developer having a keen eye on design technologies,<br/> creating great user-friendly, responsive and cross-browser compatible web designs and layouts.<br/>
As a front end developer, I know the core concepts of UX/UI Designing and tools. I also have a strong grip on the<br/>
front-end fundamentals of CSS, JavaScript, and HTML. </span>
         <div className='skillBars'>
        <div className='skillBar'>
        <img src="./images/html5.jpg" alt="" className='skillBarImage'/>
        <div className='skillBarText'>
            <h2> HTML</h2>
            <p></p>
        </div>
        </div>

        <div className='skillBar'>
        <img src="./images/css.jpg" alt="" className='skillBarImage'/>
        <div className='skillBarText'>
            <h2> CSS</h2>
            <p></p>
        </div>
        </div>

        <div className='skillBar'>
        <img src="./images/js.png" alt="" className='skillBarImage'/>
        <div className='skillBarText'>
            <h2> JAVASCRIPT</h2>
            <p></p>
            </div>
            </div>
        <div className='skillBar'>
        <img src="./images/react.png" alt="" className='skillBarImage'/>
        <div className='skillBarText'>
            <h2> REACT</h2>
            <p> solid understanding of react. Develop all my websites with react. This is all say for now</p>
            </div>
            </div>

            <div className='skillBar'>
            <img src="./images/figma.png" alt="" className='skillBarImage'/>
            <div className='skillBarText'>
            <h2> UI DESIGN</h2>
            <p>I do sketches. wireframes and prototypes of the UI before i do development </p>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Skills