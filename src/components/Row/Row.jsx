// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Row.css'
import Rows from '../Rows/Rows';


const Row = ({title,fetchURL}) => {

    const [movies,setMovies] = useState([]);
    useEffect(()=>{
axios.get(fetchURL).then((response)=>{
    setMovies(response.data.results)
})
    },[fetchURL])

    console.log(movies)
    return (
      <div>
         <h2 className='title'>{title}</h2> 
       <div className='row-posters'>
          {movies.map((item)=>(
            <Rows key={item.id} item={item} title={title}></Rows>
      
            )
           
            )}
       </div>

      </div>
    


            
    );
};

export default Row;