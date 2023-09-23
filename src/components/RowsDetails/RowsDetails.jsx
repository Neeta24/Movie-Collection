// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import './RowsDetails.css'

import { useLoaderData, } from 'react-router-dom';


const RowsDetails = () => {
  const movieData = useLoaderData()
console.log(movieData);
const{genres,original_title,backdrop_path,overview,vote_average,vote_count,release_date,spoken_languages
}= movieData;

 
  
    return (
      <div>
      <div className='banner-image' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`}}>
          
          <div className='details'>
              <h1>{original_title}</h1>
              <p className='overview'>{overview}</p>
              
              <div>
              <p>GENRES</p>
              <div className='genres'>
              <p><span>{genres[0]?.name}</span></p>
              <p><span>{genres[1]?.name}</span></p>
              <p><span>{genres[2]?.name}</span></p>
              </div>
              </div>
              <div>
              <button className='watch'>Watch</button>
              <button className='mylist'>Mylist</button> 
              </div>
  
              <div className='overview-details'>
              <img src="/src/assets/image 5.png" alt="" />
              
              <p className='rating'>{vote_average}</p>
              <button className='count'>{vote_count}K</button>
              <p>{release_date}</p>
              </div>
              <div>
                <p>Audio</p>
                <p>{ spoken_languages[0].english_name}</p>
              </div>
          </div>
      </div>
      
    
  </div>
    );
};

export default RowsDetails;