import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/header/Navbar';
import Footer from '../shared/footer/Footer';
import "../../index.css"

const Main = () => {
    return (
        <div>
            <Navbar/>
            <div className='min-h-screen'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;  
