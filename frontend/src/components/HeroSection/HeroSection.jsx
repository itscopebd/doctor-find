import React from 'react';
import heroImage01 from "../../assets/images/hero-img01.png"
import heroImage02 from "../../assets/images/hero-img02.png"
import heroImage03 from "../../assets/images/hero-img03.png"
const HeroSection = () => {
    return (
        <div className='hero_section h-[800px]'>
            <div className="container mx-auto flex items-center justify-normal h-full gap-32">

                <div className="w-6/12">
                    <div className=''>
                        <h3 className='text-5xl text-headingColor leading-[55px] font-bold'>We help patients live a healthy, longer life.</h3>
                        <p className='my-5'>Lorem ipsum dolor sit amet consectetur,  adipisicing elit. Nulla, minus! Ducimus aperiam est molestias laborum rerum consectetur itaque saepe non dolore, alias nulla, possimus facilis rem voluptatum? Velit, molestiae quae neque laborum quaerat delectus, officiis modi officia error atque enim illum repellendus distinctio id eius assumenda harum voluptatum voluptas sit!</p>
                        <button className='custom__btn'>Request an Appointment</button>
                    </div>
                    <div className='flex gap-10 mt-16'>
                        <div>
                            <div className='relative mb-4'>
                                <h3 className='text-3xl font-bold'> 30+</h3>
                                <span className='h-2 absolute bottom-0 inline-block bg-yellowCollor w-16'></span>

                            </div>
                            <p>Years of Experiences</p>
                        </div>
                        <div>
                            <div className='relative mb-4'>
                                <h3 className='text-3xl font-bold'> 15+</h3>
                                <span className='h-2 absolute bottom-0 inline-block bg-purpleColor w-16'></span>

                            </div>
                            <p>Clinic Location</p>
                        </div>
                        <div>
                            <div className='relative mb-4'>
                                <h3 className='text-3xl font-bold'> 100%</h3>
                                <span className='h-2 absolute bottom-0 inline-block bg-irisBlueColor w-16'></span>

                            </div>
                            <p>Patient Satisfaction</p>
                        </div>
                    </div>

                </div>

                <div className="w-6/12">
                   <div className='flex gap-6'>
                   <div>
                        <img src={heroImage01} alt="" />
                    </div>
                    <div>
                        <img src={heroImage02} className='mb-3' alt="" />
                        <img src={heroImage03} alt="" />
                    </div>
                   </div>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;