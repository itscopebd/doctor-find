import React from 'react';
import icon01 from "../../assets/images/icon01.png";
import icon02 from "../../assets/images/icon02.png";
import icon03 from "../../assets/images/icon03.png";
import { FaArrowRight } from 'react-icons/fa';
const Services = () => {
    return (
        <div className='container mx-auto my-20'>
            <div className='w-3/12 mx-auto text-center'>
                <h3 className='text-4xl font-semibold leading-10'>Providing the best medicale service</h3>
                <p className='mt-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='grid grid-cols-3 mt-7'>
                <div className='py-[30px] px-5'>
                    <div className='flex items-center justify-center'>
                        <img src={icon01} alt="" />
                    </div>
                    <div className='mt-[30px]'>
                        <h2 className='text-[26px] text-headingColor font-bold text-center'>Find a Doctor</h2>
                        <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error pariatur eos aperiam, repellat officiis dolor voluptate totam quae. Repellendus, at culpa odit veniam inventore voluptatum ex? Maiores asperiores rem consectetur.</p>
                        <a href="" className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none hover:text-white'> <FaArrowRight />  </a>
                    </div>
                </div>
                <div className='py-[30px] px-5'>
                    <div className='flex items-center justify-center'>
                        <img src={icon02} alt="" />
                    </div>
                    <div className='mt-[30px]'>
                        <h2 className='text-[26px] text-headingColor font-bold text-center'>Find a Location</h2>
                        <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error pariatur eos aperiam, repellat officiis dolor voluptate totam quae. Repellendus, at culpa odit veniam inventore voluptatum ex? Maiores asperiores rem consectetur.</p>
                        <a href="" className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none hover:text-white'> <FaArrowRight />  </a>
                    </div>
                </div>
                <div className='py-[30px] px-5'>
                    <div className='flex items-center justify-center'>
                        <img src={icon03} alt="" />
                    </div>
                    <div className='mt-[30px]'>
                        <h2 className='text-[26px] text-headingColor font-bold text-center'>Book Appointment</h2>
                        <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error pariatur eos aperiam, repellat officiis dolor voluptate totam quae. Repellendus, at culpa odit veniam inventore voluptatum ex? Maiores asperiores rem consectetur.</p>
                        <a href="" className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none hover:text-white'> <FaArrowRight />  </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;