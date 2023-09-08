import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
const FaqItems = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openHide = () => {
    setIsOpen(!isOpen)
  };

  return (
    <div className="my-3">
      <div
        className="bg-[#D0F0F3] flex justify-between p-3 rounded-md cursor-pointer"
        onClick={openHide}
      >
        <h3 className=" text-black text-lg font-semibold">{item.question}</h3>

        <span className="flex items-center">
            
            {
                isOpen &&  isOpen?<FaMinus className=" font-normal text-sm"></FaMinus>:<FaPlus className=" font-normal text-sm" />
            }
          
        </span>
      </div>
      <div className={`my-2 ${isOpen? 'block delay-1000 duration-300':'hidden delay-1000 duration-300'}`}>
        <p className="text-md font-medium">{item.content}</p>
      </div>
    </div>
  );
};

export default FaqItems;
