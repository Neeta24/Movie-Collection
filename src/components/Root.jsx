// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';


const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
           
        </div>
    );
};

export default Root;
