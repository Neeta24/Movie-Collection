// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import './RowsDetails.css'

import { useLoaderData, } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';


const RowsDetails = () => {
  const movieData = useLoaderData()
console.log(movieData);
const{genres,original_title,backdrop_path,overview,vote_average,vote_count,release_date,spoken_languages}= movieData;

 
  
    return (
      <div>
      <div className='banner-image' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`}}>
          
        <div className='details-top'>

        <div className='details'>
              <h1>{original_title}</h1>
              <p className='overview'>{overview}</p>
              
              <div>
              <p className='gen'>GENRES</p>
              <div className='genres'>
              <p><span>{genres[0]?.name}</span></p>
              <p><span>{genres[1]?.name}</span></p>
              <p><span>{genres[2]?.name}</span></p>
              </div>
              </div>
              <div>
              <button className='watch'>Watch <span><FontAwesomeIcon icon={faPlay}></FontAwesomeIcon></span></button>
              <button className='mylist'>Mylist <span><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></span></button> 
              </div>
  
              <div className='overview-details'>
              <img src="image 5.png" alt="imdb" />
              <p className='universal'>U/A</p>
              <p className='rating'>{vote_average}</p>
              <button className='count'>{vote_count}K</button>
              <p>{release_date}</p>
              </div>
              <div className='audio'>
                <p className='audio-style'>AUDIO</p>
                <p>{ spoken_languages[0].english_name}</p>
              </div>
              <div className='last-div'>
                <p className='audio-style'>SUBTITLE</p>
              </div>

             
          </div>

         
        </div>
      </div>
      
    
  </div>
    );
};

export default RowsDetails;