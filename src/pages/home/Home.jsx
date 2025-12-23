import React from 'react';
import Hero from './Hero';
import Tools from './Tools';
import CompaniesLogos from './CompaniesLogos';
import Services from '../services/Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Tools/>
            <CompaniesLogos/>
            <Services/>
            <Testimonial/>
        </div>
    );
};

export default Home;