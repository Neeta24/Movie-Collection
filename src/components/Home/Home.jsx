// eslint-disable-next-line no-unused-vars
import React from 'react';
import Row from '../Row/Row';
import requests from '../../Requests';
import Main from '../Main/Main';
import './Home.css'



const Home = () => {
    return (
        <div>
            <Main></Main>
            <Row title='MOVIES YOU MUST WATCH' fetchURL ={requests.popular}></Row>
            <div className='heading'>
                <h4>RECOMENDED FOR YOU</h4>
            </div>
            <div>
                <button className='button-details red-color'>Hindi</button>
                <button className='button-details ass-color'>Marathi</button>
                <button className='button-details ass-color'>Bengali</button>
                <button className='button-details ass-color'>Assamese</button>
                <button className='button-details ass-color'>Telugu</button>
                <button className='button-details red-color'>Tamil</button>
                <button className='button-details ass-color'>Malayalam</button>
                
            </div>
            <Row  fetchURL ={requests.recomended}></Row>
            <Row title='HOLLYWOOD CLASSICS' fetchURL ={requests.classic}></Row>
         
        </div>
    );
};

export default Home;