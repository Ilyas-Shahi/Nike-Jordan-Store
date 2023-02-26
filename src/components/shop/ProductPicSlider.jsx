import { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Zoom } from 'swiper';
import SanityImage from '../layout/SanityImage';

import PrevChevIcon from '../../assets/svg/left-chev.svg';
import NextChevIcon from '../../assets/svg/righ-chev.svg';

import 'swiper/css';
import 'swiper/css/zoom';

const ProductPicSlider = ({ images }) => {
  const swiperRef = useRef();

  const slideToIndex = (index) => {
    swiperRef.current?.slideTo(index);
  };

  return (
    <div className="sticky flex gap-4 h-max top-12">
      <div className="w-[60px] md:h-[54vw] lg:h-[610px] xl:h-[669px] overflow-hidden overflow-y-scroll scrollbar-hidden">
        {images?.map((image, index) => {
          return (
            <button
              key={index}
              onClick={() => slideToIndex(index)}
              onMouseEnter={() => slideToIndex(index)}
            >
              <SanityImage
                imageRef={image.asset._ref}
                className="object-cover w-[60px] h-[64px] rounded-md transition-all hover:brightness-90"
              />
            </button>
          );
        })}
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        speed={0}
        zoom={true}
        freeMode={{
          enabled: true,
          sticky: true,
        }}
        modules={[FreeMode, Zoom]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="relative w-[535px] h-max rounded-lg swiperStyles mx-0"
      >
        {images?.map((image, index) => {
          return (
            <SwiperSlide key={index} className="">
              <div className="swiper-zoom-container">
                <SanityImage
                  imageRef={image.asset._ref}
                  className="rounded-lg"
                />
              </div>
            </SwiperSlide>
          );
        })}

        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute z-40 flex items-center justify-center w-9 h-9 p-2 transition-all bg-white rounded-full bottom-7 right-[4.5rem]"
        >
          <img src={PrevChevIcon} alt="" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute z-40 flex items-center justify-center p-2 transition-all bg-white rounded-full w-9 h-9 bottom-7 right-7"
        >
          <img src={NextChevIcon} alt="" />
        </button>
      </Swiper>
    </div>
  );
};
export default ProductPicSlider;
