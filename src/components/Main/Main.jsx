// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import requests from '../../Requests';
import axios from 'axios';

import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';



const Main = () => {

    
    const[movies,setMovies] = useState([]);
    const movie = movies[Math.floor(Math.random()*movies.length)];

    // [Math.floor(Math.random()*movies.length)]

useEffect(()=>{
axios.get(requests.popular)
.then((response)=>{
    setMovies(response.data.results)
})
},[])

console.log(movie)
    return (

<div>
    <div className='banner-image' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`}}>
        
        <div className='details'>
            <h1>{movie?.original_title}</h1>
            <p className='overview'>{movie?.overview}</p>
            <h3>GENRES</h3>
            <p><span></span></p>
            <div>
            <button className='watch'>Watch <span><FontAwesomeIcon icon={faPlay}></FontAwesomeIcon></span></button>
            <button className='mylist'>Mylist <span><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></span></button> 
            </div>

            <div className='overview-details'>
            <img src="/src/assets/image 5.png" alt="" />
            <p className='universal'>U/A</p>
            <p className='rating'>{movie?.vote_average}</p>
            <button className='count'>{movie?.vote_count}K</button>
            <p>{movie?.release_date}</p>
            </div>
        </div>
    </div>
    
  
</div>
    
    
    
 

    

    );
};

export default Main;