import React from 'react';
import featureImage from "../../assets/images/Feature-img.png"
import avata from "../../assets/images/avatar-icon.png"
import videoIcon from "../../assets/images/video-icon.png"
const Feature = () => {
    return (
        <div className='container mx-auto flex justify-between my-20 py-10 items-center'>
            <div className='w-6/12'>
                <h4 className='text-4xl font-bold'>Get virtual treatment anytime</h4>
                <ul className='flex flex-col gap-3 my-3'>
                    <li>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, tempora.</li>
                    <li>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, tempora.</li>
                    <li>3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, tempora.</li>

                </ul>
                <button className='custom__btn'>Learn More</button>
            </div>
            <div className='w-6/12 flex justify-end relative'>
                <img className='text-right' src={featureImage} alt="" />
                <div className=' left-32 w-52 bg-white p-2 absolute bottom-0 z-50 mb-10 rounded-md'>

                    <div>
                        <p className='flex justify-between'> <span className='font-bold'>Tue,24</span> 10.00AM  <p className='p-1 rounded-md box-shadow-lg bg-yellowCollor'><img src={videoIcon} alt="" /></p> </p>
                        <button className=' my-2 bg-[#CCF0F3] rounded-lg text-xs px-3 py-2'>Consaltation</button>
                    </div>
                    <div className='flex gap-4'>
                        <img src={avata} alt="" />
                        <p className='font-semibold'>Wayne Colling</p>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Feature;