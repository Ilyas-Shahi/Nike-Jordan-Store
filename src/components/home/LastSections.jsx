/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Scrollbar } from 'swiper';

import useIsMobileBreakpoint from '../../hooks/useIsMobileBreakpoint';

import ButtonPrimary from '../layout/ButtonPrimary';
import ButtonSecondary from '../layout/ButtonSecondary';

import JordanMenImg from '../../assets/jordan-men.jpg';
import JordanWomenImg from '../../assets/jordan-women.jpg';
import JordanKidsImg from '../../assets/jordan-kids.jpg';
import SkyJordanImg from '../../assets/sky-jordan.jpg';
import JordanElevatedImg from '../../assets/jordan-elevated.jpg';

const LastSections = () => {
  const isMobileScreen = useIsMobileBreakpoint();

  return (
    <>
      <div className="py-20 md:p-12 w-full">
        <h3 className="mb-6 text-2xl font-extrabold tracking-tight mx-6 md:ml-0">
          JORDAN GEAR FOR THE ENTIRE FAM
        </h3>

        <Swiper
          slidesPerView={1.4}
          spaceBetween={14}
          centeredSlides={false}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
          }}
          scrollbar={{
            draggable: true,
          }}
          modules={[Keyboard, Scrollbar, Navigation]}
          className="pb-8 mySwiper"
        >
          <SwiperSlide className="ml-6 md:ml-0">
            <Link to="shop">
              <div className="w-full">
                <img src={JordanMenImg} alt="" className="w-full" />
                <h3 className="mt-12 mb-7 text-2xl font-extrabold">MEN</h3>
                {!isMobileScreen && <ButtonPrimary>Shop</ButtonPrimary>}
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="">
            <Link to="shop">
              <div className="w-full">
                <img src={JordanWomenImg} alt="" className="w-full" />
                <h3 className="mt-12 mb-7 text-2xl font-extrabold">WOMEN</h3>
                {!isMobileScreen && <ButtonPrimary>Shop</ButtonPrimary>}
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="">
            <Link to="shop">
              <div className="w-full">
                <img src={JordanKidsImg} alt="" className="w-full" />
                <h3 className="mt-12 mb-7 text-2xl font-extrabold">KIDS</h3>
                {!isMobileScreen && <ButtonPrimary>Shop</ButtonPrimary>}
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="p-6 md:p-12">
        <h3 className="mb-6 text-2xl font-extrabold tracking-tight">
          THE LATEST FROM JORDAN
        </h3>

        <div className="flex flex-col md:flex-row md:gap-3">
          <Link to="/shop" className="w-full relative mb-2">
            <div className="absolute z-10 md:bottom-12 bottom-6 md:left-12 left-6">
              <h4 className="mb-6 text-2xl leading-6 font-extrabold z-10">
                JORDAN 23/7 <br /> 'SKY JORDAN'
              </h4>
              <ButtonPrimary>Shop</ButtonPrimary>
            </div>

            <img src={SkyJordanImg} alt="" className="w-full" />
          </Link>

          <Link to="/shop" className="w-full relative mb-2">
            <div className="absolute z-10 md:bottom-12 bottom-6 md:left-12 left-6">
              <h4 className="mb-6 text-2xl text-white font-extrabold">
                ELEVATED EVERYDAY ESSENTIALS
              </h4>
              <ButtonSecondary>Shop</ButtonSecondary>
            </div>

            <img src={JordanElevatedImg} alt="" className="w-full" />
          </Link>
        </div>
      </div>
    </>
  );
};
export default LastSections;
