import React from 'react';
import Hero from './Hero';
import Tools from './Tools';
import CompaniesLogos from './CompaniesLogos';
import Services from '../services/Services';
import Testimonial from './Testimonial';
import Blogs from '../blog/Blogs';
import TeamSection from './TeamSection';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Tools/>
            <CompaniesLogos/>
            <Services/>
            <Testimonial/>
            <Blogs/>
            <TeamSection/>
        </div>
    );
};

export default Home;