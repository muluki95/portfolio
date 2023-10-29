import React, {useState} from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';

const Navbar = () => {
  const[showMenu,setShowMenu]=useState(false);
  return (
    <div className='Navbar'>
        <h1> Portfolio </h1>
        <div className='links'>
            
 <Link activeClass='active' to='about me' spy={true} smooth={true} offset={-50} duration={500} className="link">About </Link>
 <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="link">Skills</Link>
 <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className="link">Project</Link>
 <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="link">Contact</Link>          
            
        </div>


  <img src="./images/menu2.png" alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
  <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
  <Link activeClass='active' to='about me' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About </Link>
 <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link>
 <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className="listItem"onClick={()=>setShowMenu(false)}>Projects</Link>
 <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem"onClick={()=>setShowMenu(false)}>Contact</Link>          
  </div>

    </div>
  )
}

export default Navbar