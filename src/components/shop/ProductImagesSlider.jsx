import { useRef } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Keyboard, Navigation, Scrollbar } from 'swiper';
import SanityImage from '../layout/SanityImage';

import PrevChevIcon from '../../assets/svg/left-chev.svg';
import NextChevIcon from '../../assets/svg/righ-chev.svg';
import LockIcon from '../../assets/svg/lock-icon.svg';

import 'swiper/css';
// import 'swiper/css/scrollbar';

import './swiperStyles.css';

const ProductImagesSlider = ({ images }) => {
  const swiperRef = useRef();

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        scrollbar={{
          draggable: true,
        }}
        freeMode={{
          enabled: true,
          sticky: true,
        }}
        modules={[Navigation, Scrollbar, FreeMode]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="relative md:hidden -mx-6 swiperStyles"
      >
        {images?.map((image, index) => {
          return (
            <SwiperSlide className="" key={index}>
              <SanityImage imageRef={image.asset._ref} />
            </SwiperSlide>
          );
        })}

        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute z-40 flex items-center justify-center w-10 h-10 bg-white bg-opacity-50 rounded-full top-1/2 left-6 hover:bg-opacity-100 transition-all"
        >
          <img src={PrevChevIcon} alt="" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute z-40 flex items-center justify-center w-10 h-10 bg-white bg-opacity-50 rounded-full top-1/2 right-6 hover:bg-opacity-100 transition-all"
        >
          <img src={NextChevIcon} alt="" />
        </button>
      </Swiper>
    </>
  );
};
export default ProductImagesSlider;
