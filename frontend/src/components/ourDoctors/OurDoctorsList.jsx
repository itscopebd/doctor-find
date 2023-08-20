import React from 'react';

import { doctors } from "../../assets/data/doctors"
import OurDoctorsCard from './OurDoctorsCard';

const OurDoctorsList = () => {
    return (
        <div className='container mx-auto my-20 py-10'>

            <div className='w-3/12 mx-auto text-center mb-8'>
                <h3 className='text-4xl font-semibold leading-10'>Our Doctors</h3>
                <p className='mt-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='mx-auto grid grid-cols-3 md:gap-16'>
                {
                    doctors.map((doctor, index) => <OurDoctorsCard doctor={doctor} key={index}></OurDoctorsCard>)
                }
            </div>
        </div>
    );
};

export default OurDoctorsList;