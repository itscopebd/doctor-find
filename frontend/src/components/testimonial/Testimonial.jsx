import { Navigation, Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from "swiper/react";
import star from "../../assets/images/star.png"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import avatarImage from "../../assets/images/patient-avatar.png";

const Testimonial = () => {
  return (
 <div className='container mx-auto my-20'>
   <div className='w-3/12 mx-auto text-center mb-8'>
                <h3 className='text-4xl font-semibold leading-10'>What our patient say</h3>
                <p className='mt-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
      <Swiper className='overflow-hidden min-h-[160px]'
        modules={[Pagination,Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div>
            <div className='flex items-center gap-3'>
              <img src={avatarImage} alt="No Image" />
              <div>
                <h2 className='text-black font-medium text-xl'>Rofiqul Islam</h2>
                <div className='flex mt-2'>
                  <img className='w-4 h-4' src={star} alt="revivew" />
                  <img className='w-4 h-4' src={star} alt="revivew" />
                  <img className='w-4 h-4' src={star} alt="revivew" />
                  <img className='w-4 h-4' src={star} alt="revivew" />
                  <img className='w-4 h-4' src={star} alt="revivew" />

                </div>
              </div>
            </div>
            <p className='mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni aut aperiam neque qui pariatur, in et sequi quasi id obcaecati.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className='flex items-center gap-3'>
              <img src={avatarImage} alt="No Image" />
              <div>
                <h2 className='text-black font-medium text-xl'>Jamil Hossain</h2>
                <div className='flex mt-2'>
                  <img className='w-4 h-4' src={star} alt="revivew" />
                  <img className='w-4 h-4' src={star} alt="revivew" />
                  <img className='w-4 h-4' src={star} alt="revivew" />
                  <img className='w-4 h-4' src={star} alt="revivew" />
                  <img className='w-4 h-4' src={star} alt="revivew" />

                </div>
              </div>
            </div>
            <p className='mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni aut aperiam neque qui pariatur, in et sequi quasi id obcaecati.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className='flex items-center gap-3'>
              <img src={avatarImage} alt="No Image" />
              <div>
                <h2 className='text-black font-medium text-xl'>Kawser</h2>
                <div className='flex mt-2'>
                  <img className='w-4 h-4' src={star} alt="revivew" />
                  <img className='w-4 h-4' src={star} alt="revivew" />
                  <img className='w-4 h-4' src={star} alt="revivew" />
                  <img className='w-4 h-4' src={star} alt="revivew" />
                  <img className='w-4 h-4' src={star} alt="revivew" />

                </div>
              </div>
            </div>
            <p className='mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni aut aperiam neque qui pariatur, in et sequi quasi id obcaecati.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className='flex items-center gap-3'>
              <img src={avatarImage} alt="No Image" />
              <div>
                <h2 className='text-black font-medium text-xl'>Kadir</h2>
                <div className='flex mt-2'>
                  <img className='w-4 h-4' src={star} alt="revivew" />
                  <img className='w-4 h-4' src={star} alt="revivew" />
                  <img className='w-4 h-4' src={star} alt="revivew" />
                  <img className='w-4 h-4' src={star} alt="revivew" />
                  <img className='w-4 h-4' src={star} alt="revivew" />

                </div>
              </div>
            </div>
            <p className='mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni aut aperiam neque qui pariatur, in et sequi quasi id obcaecati.</p>
          </div>
        </SwiperSlide>
      </Swiper>
  </div>
  );
};

export default Testimonial;
