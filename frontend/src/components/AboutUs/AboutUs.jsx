import React from 'react';
import about from "../../assets/images/about.png";
import aboutCard from "../../assets/images/about-card.png"
const AboutUs = () => {
    return (
        <div className='container mx-auto my-24'>
            
            <div className='flex'>
                <div className='w-6/12 relative'>
                    <img src={about} alt="" />
                    <div className='absolute right-10 -bottom-0'>
                        <img src={aboutCard} alt="" />
                    </div>
                </div>
                <div className='w-6/12'>
                
                 <h3 className='text-4xl font-bold'>Proud to be one of the nations best</h3>
                    <p className='my-[20px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, eum quidem. Expedita laborum natus placeat itaque. Error cum reiciendis quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptates optio reprehenderit vel, dolor inventore aspernatur tempora animi aperiam error soluta, dolorem et culpa provident dolorum excepturi adipisci nobis quam aliquid dicta sapiente quidem magni? Totam similique quam nostrum. Placeat enim cum aliquam corrupti assumenda modi, tenetur quis aliquid commodi.</p>
                    <p className='my-[20px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, eum quidem. Expedita laborum natus placeat itaque. Error cum reiciendis quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptates optio reprehenderit vel, dolor inventore aspernatur tempora animi aperiam error soluta, dolorem et culpa provident dolorum excepturi adipisci nobis quam aliquid dicta sapiente quidem magni? Totam similique quam nostrum. Placeat enim cum aliquam corrupti assumenda modi, tenetur quis aliquid commodi.</p>
                    <button className='custom__btn'>Learn More</button>
                 </div>
               
            </div>

        </div>
    );
};

export default AboutUs;