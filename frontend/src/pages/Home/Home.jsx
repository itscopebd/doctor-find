import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import Services from '../../components/Services/Services';
import AboutUs from '../../components/AboutUs/AboutUs';
import OurMedicaleServiceList from '../../components/ourMedicaleService/ourMedicaleServiceList';
import Feature from '../../components/feature/Feature';
import OurDoctorsList from '../../components/ourDoctors/OurDoctorsList';
import FaqList from '../../components/faq/FaqList';
import Testimonial from '../../components/testimonial/Testimonial';


const Home = () => {
    return (
        <div>
           <HeroSection></HeroSection>
           <Services></Services>
           <AboutUs></AboutUs>
           <OurMedicaleServiceList></OurMedicaleServiceList>
           <Feature></Feature>
           <OurDoctorsList></OurDoctorsList>
           <FaqList></FaqList>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;