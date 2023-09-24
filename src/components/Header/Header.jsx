// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faGift, faSearch} from '@fortawesome/free-solid-svg-icons'



const Header = () => {
    return (
        <div className='header'>
           <div className='left-header'>
           <div className='Header-image'>
            <img src="DRAMATIC.png" alt="" />
           </div>

               <div className='header-links'>
                   <Link className='link' to ='./home'>Home</Link>
           <Link className='link' to ='./show'>Tv Show</Link>
          <Link className='link' to ='./Movies'>Movies</Link>
        <Link className='link' to ='./new'>New</Link>
           </div>
           </div>

            <div className='right-header'>
            
                
            <form>
            <input className='searchbar' type="search" id="site-search" name="search" placeholder="Search" />
            <button className='icon'><FontAwesomeIcon icon={faSearch} /></button>
            </form>
            
            

            <div className='profile'>
            <FontAwesomeIcon icon={faGift} className='gift'/>
            <FontAwesomeIcon icon={faBell} className='bell'/>
          
            
            </div>
            <div className='profile-details' >
                
            </div>
            </div>
            
           
            
        </div>
    );
};

export default Header;