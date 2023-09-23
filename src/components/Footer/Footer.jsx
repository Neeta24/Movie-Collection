// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='footer-bar'>
            <div></div>

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
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </div>
            
        </div>
      
       
    );
};

export default Footer;