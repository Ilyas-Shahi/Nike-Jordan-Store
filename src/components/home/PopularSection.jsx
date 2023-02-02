import { ImageUrlBuilder } from '@sanity/image-url';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Pagination, Scrollbar } from 'swiper';

import useFetch from '../../hooks/useFetch';

import PrevChevIcon from '../../assets/left-chev.svg';
import NextChevIcon from '../../assets/righ-chev.svg';
import LockIcon from '../../assets/lock-icon.svg';

import AirJordan1 from '../../assets/air-jordan-1-mid-se.png';

import 'swiper/css';
import 'swiper/css/scrollbar';

import './custom-swiper-styles.css';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'your-project-id',
  dataset: 'your-dataset-name',
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: '2022-01-12', // use current date (YYYY-MM-DD) to target the latest API version
});

const builder = ImageUrlBuilder(client);

const PopularSection = () => {
  const swiperRef = useRef();

  const products = useFetch(`*[_type == 'product'] | order(_createdAt asc)`);

  console.log(products[0]?.result);

  const urlFor = (source) => {
    return builder.image(source);
  };

  console.log(urlFor());

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
        spaceBetween={20}
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
        {products[0]?.result.map((product) => (
          <SwiperSlide className="" key={product._id}>
            <Link to="#">
              <img
                src={builder
                  .imageUrlFor(product.gallery.images[0].asset._ref)
                  .url()}
                alt=""
                className="w-full"
              />

              <div className="flex justify-between my-6">
                <div>
                  <p className="font-thin text-orange-800">
                    {product.specialty}
                  </p>
                  <h4 className="text-sm font-extrabold">{product.title}</h4>
                  <p className="text-sm font-extrabold leading-none text-gray-600">
                    {product.categories.map((category) => (
                      // eslint-disable-next-line react/jsx-key
                      <span>{category.toUpperCase()} </span>
                    ))}
                  </p>
                </div>
                <p className="text-base font-extrabold">${product.price}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="h-screen"></div>
    </>
  );
};
export default PopularSection;
