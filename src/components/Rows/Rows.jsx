// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Rows.css'
import { Link } from 'react-router-dom';

const Rows = ({item}) => {
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
             <p>{title}</p>
             <p>{release_date}</p>
             <p>{vote_average}</p>
             </div>
        </div>
        
        </Link> 
       
    )
};

export default Rows;