import React from 'react';
import {services} from "../../assets/data/services"
import OurMedicaleServiceCard from './ourMedicaleServiceCard';

const OurMedicaleServiceList = () => {
    
    return (

        <div className='my-20'>
         <div className='w-3/12 mx-auto text-center'>
                <h3 className='text-4xl font-semibold leading-10'>Our medicale service</h3>
                <p className='mt-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='grid mt-[30px] md:grid-cols-3 container mx-auto gap-10'>
            {
                services.map((item,index)=><OurMedicaleServiceCard item={item} key={index} index={index}></OurMedicaleServiceCard>)
            }
        </div>
        </div>
        
    );
};

export default OurMedicaleServiceList;