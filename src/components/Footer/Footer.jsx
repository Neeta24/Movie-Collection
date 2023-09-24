// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobe,faChevronDown  } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div >
            <div className='footer-bar'>
            <div >
                <button className='language-bar'><span><FontAwesomeIcon className='globe' icon={faGlobe}></FontAwesomeIcon></span> 
                ENGLISH <span><FontAwesomeIcon className='globe' icon={ faChevronDown}></FontAwesomeIcon></span></button>
            </div>

            <div className='navigation'>
            <h3>NAVIGATION</h3>
                
               <p> Home </p>     
               <p> FAQ </p>     
               <p> Investor Relations</p>     
               <p> Jobs </p>     
               <p> About Us</p>     
               <p> Help Centre</p>
            </div>
            <div>
                <h3>LEGAL</h3>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Cookie Preferences</p>
                <p>Corporate Information</p>
            </div>

            <div>
            <h3>TALK TO US</h3>
            <p>support@ercom.com</p>
            <p>+66 2399 1145 </p>
            
            </div>
            <div>
                <h3>FOLLOW US</h3>
                <FontAwesomeIcon className='icons' icon={faFacebook}></FontAwesomeIcon>
                <FontAwesomeIcon className='icons'icon={faLinkedin}></FontAwesomeIcon>
                <FontAwesomeIcon className='icons'icon={faTwitter}></FontAwesomeIcon>
            </div>

            </div>
            <div >
                <p className='copyright'>© 2022 Dramatic. All Rights Reserved. </p>
            </div>
            
            
            
        </div>
      
       
    );
};

export default Footer;