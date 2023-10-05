import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet/>
        </div>
    );
};

export default Main;