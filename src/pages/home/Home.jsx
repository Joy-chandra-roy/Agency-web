import React from 'react';
import Hero from './Hero';
import CompaniesLogos from './CompaniesLogos';
import Services from '../services/Services';
import Testimonial from './Testimonial';
import Blogs from '../blog/Blogs';
import TeamSection from './TeamSection';
import Pricing from './Pricing';
import FAQ from './FAQ';
import About from '../about/About';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <CompaniesLogos/>
            <Services/>
            <Testimonial/>
            <Blogs/>
            <TeamSection/>
            <Pricing/>
            <FAQ/>
            <Contact/>
        </div>
    );
};

export default Home;