import React from 'react';
import './Project.css';

const Projects = () => {
  return (
    <section id="projects">
        <h2 className='projectTitle'> My Projects </h2>
        <span className='projectDesc'> These are the projects that I have worked on so far. They have helped me in perfecting my skills</span>
        <div className='projectImages'>

            <img src="./images/image2.jpg" alt=""  className='projectImage' />
            <img src="./images/image2.jpg" alt=""  className='projectImage' /> 
            <img src="./images/image2.jpg" alt=""  className='projectImage' />

        </div>
    </section>
  );
}

export default Projects