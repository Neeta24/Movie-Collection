// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Rows.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons';



const Rows = ({item }) => {
    const{poster_path,release_date,vote_average,title,id} =item;

    const linkstyle={
        textDecoration:"none",
        color:"black",
        size:"1rem"

    }
    return (
        
        <Link to ={`../movie/${id}`} style={linkstyle}>
          <div className='main__rows'>
        <img  className='row-poster'src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={title} />
             <div>
                <p className='rows-title'>{title}</p>
                <span className='release-date'>{release_date}</span>
             </div>
             <div className='content'>
                <div className='left-content'>
                    
                <img   src="image 5.png"  alt="" />
             <p className='vote'>{vote_average}</p>
                </div>
                <div className='right-content'>
                  <FontAwesomeIcon className='eye-icon' icon={faEye}></FontAwesomeIcon>
                  <FontAwesomeIcon className='love-icon' icon={faHeart}></FontAwesomeIcon>
                </div>
             
             </div>
        </div>
       
        </Link> 
       
    )
};

export default Rows;