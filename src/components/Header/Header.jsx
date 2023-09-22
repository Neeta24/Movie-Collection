// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='header'>
           <div className='header-left'>
           <div className='Header-image'></div>

               <div className='header-links'>
                   <Link className='link' to ='./home'>Home</Link>
           <Link className='link' to ='./show'>Tv Show</Link>
          <Link className='link' to ='./Movies'>Movies</Link>
        <Link className='link' to ='./new'>New</Link>
           </div>
           </div>

            <div className='right-header'>
            <label>
            <input className='searchbar' type="search" id="site-search" name="search" placeholder="Search"/>
            </label>
            <div className='profile'></div>
            </div>
            
           
            
        </div>
    );
};

export default Header;