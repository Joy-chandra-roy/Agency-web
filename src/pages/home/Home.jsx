import React from 'react';
import Hero from './Hero';
import Tools from './Tools';
import CompaniesLogos from './CompaniesLogos';
import Services from '../services/Services';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Tools/>
            <CompaniesLogos/>
            <Services/>
        </div>
    );
};

export default Home;