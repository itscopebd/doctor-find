import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const OurMedicaleServiceCard = ({ item, index }) => {
    const { name, desc, bgColor, textColor } = item;
    return (
        <div className='container mx-auto'>
            <div className="card">

                <div className="card-body">
                    <h2 className="card-title text-textColor">{name}</h2>
                    <p>{desc}</p>
                    <div className='flex justify-between items-center'>
                        <a href="" className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px]  flex items-center justify-center group hover:bg-primaryColor hover:border-none hover:text-white'> <FaArrowRight />  </a>

                        <span className='w-[44px] mt-[30px] h-[44px] flex justify-center items-center font-[600]' style={{

                            background: `${bgColor}`,
                            color: `${textColor}`,
                            borderRadius: "6px 0 0 6px"

                        }}>{index + 1}</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurMedicaleServiceCard;