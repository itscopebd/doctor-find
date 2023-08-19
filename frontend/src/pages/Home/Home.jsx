import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import Services from '../../components/Services/Services';
import AboutUs from '../../components/AboutUs/AboutUs';

const Home = () => {
    return (
        <div>
           <HeroSection></HeroSection>
           <Services></Services>
           <AboutUs></AboutUs>
        </div>
    );
};

export default Home;