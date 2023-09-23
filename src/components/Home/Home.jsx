// eslint-disable-next-line no-unused-vars
import React from 'react';
import Row from '../Row/Row';
import requests from '../../Requests';
import Main from '../Main/Main';


const Home = () => {
    return (
        <div>
            <Main></Main>
            <Row title='MOVIES YOU MUST WATCH' fetchURL ={requests.popular}></Row>
            <Row title='RECOMENDED FOR YOU' fetchURL ={requests.recomended}></Row>
            <Row title='HOLLYWOOD CLASSICS' fetchURL ={requests.classic}></Row>
         
        </div>
    );
};

export default Home;