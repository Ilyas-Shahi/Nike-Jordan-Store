import { useRef } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Scrollbar } from 'swiper';
import SanityImage from '../layout/SanityImage';

import PrevChevIcon from '../../assets/svg/left-chev.svg';
import NextChevIcon from '../../assets/svg/righ-chev.svg';
import LockIcon from '../../assets/svg/lock-icon.svg';

import 'swiper/css';
import 'swiper/css/scrollbar';
import './custom-swiper-styles.css';

const PopularSection = () => {
  const swiperRef = useRef();

  const products = useFetch(`*[_type == 'product'] | order(_createdAt asc)`);

  console.log(products);

  return (
    <>
      <div className="flex items-center justify-between px-12 my-8">
        <h3 className="text-2xl font-extrabold">POPULAR RIGHT NOW</h3>
        <div className="flex gap-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200"
          >
            <img src={PrevChevIcon} alt="" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200"
          >
            <img src={NextChevIcon} alt="" />
          </button>
        </div>
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={14}
        centeredSlides={false}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3,
          },
        }}
        scrollbar={{
          draggable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="px-12 pb-8 mySwiper"
      >
        {products[0]?.result.map((product, index) => {
          if (index < 10) {
            return (
              <SwiperSlide className="" key={product._id}>
                <Link to="#" className="group">
                  <SanityImage
                    imageRef={product.gallery.images[0].asset._ref}
                    className="h-[30vw] w-full object-cover"
                  />

                  <div className="flex justify-between my-6">
                    <div>
                      <p className="font-thin text-amber-900">
                        {product.specialty}
                      </p>
                      <h4 className="text-sm font-extrabold">
                        {product.title}
                      </h4>
                      <p className="text-sm font-extrabold leading-none text-gray-600">
                        {product.categories.map((category, index) => (
                          <span key={index}>{category.toUpperCase()} </span>
                        ))}
                      </p>
                    </div>
                    <p className="text-base font-extrabold">${product.price}</p>
                  </div>
                  <div className="absolute top-0 z-50 w-full h-full p-5 transition-all duration-500 group-hover:bg-opacity-50 group-hover:bg-white">
                    {product.specialty && (
                      <img
                        src={LockIcon}
                        alt=""
                        className="w-10 p-2 bg-white rounded-full"
                      />
                    )}
                    {product.specialty && (
                      <p className="w-2/3 mt-8 text-2xl text-amber-900 transition-all duration-700 opacity-0 group-hover:opacity-70">
                        Get this product with your free Nike Membership Profile
                      </p>
                    )}
                  </div>
                </Link>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </>
  );
};
export default PopularSection;
