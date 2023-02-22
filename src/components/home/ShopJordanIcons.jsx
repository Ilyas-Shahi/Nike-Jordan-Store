import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar } from 'swiper';

import useIsMobileBreakpoint from '../../hooks/useIsMobileBreakpoint';
import ButtonPrimary from '../layout/ButtonPrimary';

import ClothingImgLg from '../../assets/clothing-lg.jpg';
import ClothingImgMb from '../../assets/clothing-mb.jpg';
import ShoesImgLg from '../../assets/shoes-lg.jpg';
import ShoesImgMb from '../../assets/shoes-mb.jpg';
import AccessoriesImgLg from '../../assets/access-lg.jpg';
import AccessoriesImgMb from '../../assets/access-mb.jpg';

const ShopJordanIcons = () => {
  const isMobileScreen = useIsMobileBreakpoint();

  return (
    <div className="pt-12 md:p-12">
      <h3 className="mb-6 ml-6 text-2xl font-extrabold tracking-tight md:ml-0">
        SHOP JORDAN ICONS
      </h3>

      {!isMobileScreen ? (
        <div className="flex gap-3">
          <Link to="/shop" className="relative w-full">
            <div className="absolute z-10 bottom-12 left-12">
              <h4 className="mb-6 text-xl font-extrabold">CLOTHING</h4>
              <ButtonPrimary>Shop</ButtonPrimary>
            </div>

            <img src={ClothingImgLg} alt="" className="w-full" />
          </Link>

          <div className="flex flex-col justify-between w-full">
            <Link to="/shop" className="relative w-full">
              <div className="absolute z-10 bottom-12 left-12">
                <h4 className="mb-6 text-xl font-extrabold">SHOES</h4>
                <ButtonPrimary>Shop</ButtonPrimary>
              </div>

              <img src={ShoesImgLg} alt="" className="w-full" />
            </Link>

            <Link to="/shop" className="relative w-full">
              <div className="absolute z-10 bottom-12 left-12">
                <h4 className="mb-6 text-xl font-extrabold">ACCESSORIES</h4>
                <ButtonPrimary>Shop</ButtonPrimary>
              </div>

              <img src={AccessoriesImgLg} alt="" className="w-full" />
            </Link>
          </div>
        </div>
      ) : (
        <Swiper
          slidesPerView={1.4}
          spaceBetween={12}
          centeredSlides={false}
          keyboard={{
            enabled: true,
          }}
          scrollbar={{
            draggable: true,
          }}
          modules={[Keyboard, Scrollbar]}
          className="pb-8 mySwiper"
        >
          <SwiperSlide className="ml-6">
            <img src={ClothingImgMb} alt="" className="w-full" />
            <h4 className="mt-5 text-base font-bold">CLOTHING</h4>
          </SwiperSlide>
          <SwiperSlide className="">
            <img src={ShoesImgMb} alt="" className="w-full" />
            <h4 className="mt-5 text-base font-bold">SHOES</h4>
          </SwiperSlide>
          <SwiperSlide className="mr-6">
            <img src={AccessoriesImgMb} alt="" className="w-full" />
            <h4 className="mt-5 text-base font-bold">ACCESSORIES</h4>
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
};
export default ShopJordanIcons;
