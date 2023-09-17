import React from 'react';
import star from "../../assets/images/star.png";
import { FaArrowRight } from 'react-icons/fa';
const OurDoctorsCard = ({ doctor }) => {
    const { avgRating, hospital, name, photo, specialty, totalPatients, totalRating } = doctor;
    return (
        <div className="card">
           <img src={photo} alt="Shoes" />
            <div className="card-body px-1 py-4">
                <h2 className="card-title font-bold text-headingColor">{name}</h2>
                <div className='flex justify-between w-full items-center'>
                    <button className='px-3 py-2 bg-[#CCF0F3] rounded-md'>{specialty}</button>
                    <p className='text-right flex justify-end items-center gap-1'>   <img src={star} alt="" /> <span className='font-semibold'> {avgRating}</span> ({totalRating}) </p>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <h3 className='font-semibold'>+{totalPatients} Patients</h3>
                        <p>{hospital}</p>
                    </div>
                    <a href="" className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] flex items-center justify-center group hover:bg-primaryColor hover:border-none hover:text-white'> <FaArrowRight />  </a>
                </div>
            </div>
        </div>
    );
};

export default OurDoctorsCard;