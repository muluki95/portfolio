import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className='contactPage'>
        <div className='contact'>
            <h1 className="contactTitle"> Contact Me</h1>
            <span className="contactDesc"> Please fill out the form below to discuss any work opportunities</span>
            <form className='contactForm' action=""></form>
            <input type="text" className="name" placeholder='Your name' />
            <input type="text" className="email" placeholder="Your email"/>
            <textarea name="message" id="" cols="30" rows="5" className='msg' placeholder='Your message'></textarea>
            <button type='submit' value='send' className='submitButton'> Submit </button>
            <div className="links">
                <img src="./images/fb.png" alt="facebook"className='link' size='1.3rem'/>
                <img src="./images/ig.png" alt="instagram"className='link' size='1.3rem'/>
                <img src="./images/LinkedIn.png" alt="linkedIn"className='link' size='1.3rem'/>
            </div>

        </div>

    </section>

    
  )
}

export default Contact