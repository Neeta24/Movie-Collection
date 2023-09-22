// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Rows.css'

const Rows = ({item}) => {
    const{poster_path,release_date,vote_average,title} =item
    return (
        
        <>
        <div className='main__rows'>
        <img  className='row-poster'src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={title} />
             <div>
             <h2>{title}</h2>
             <p>{release_date}</p>
             <p>{vote_average}</p>
             </div>
        </div>
        
       

        </>
       
    )
};

export default Rows;