import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper';

const HeaderSlider = () => {
  return (
    <div>
      <div className="p-2 text-center bg-gray-100 border-b">
        <Swiper
          spaceBetween={100}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col">
              <span className="text-sm md:text-base">
                Looks to Love Sale | 20% Off Select Styles
              </span>
              <span className="text-xs md:text-sm">
                Log in and use code LOVE20 at checkout.
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col ">
              <span className="text-sm md:text-base">
                Free Shipping + Returns, Free Membership, Exclusive Products
              </span>
              <span className="text-xs md:text-sm">Join Now</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col ">
              <span className="text-sm md:text-base">
                Why Wait? Try Store Pickup
              </span>
              <span className="text-xs md:text-sm">
                Buy online and find a store near you for pick up in less than 2
                hours. Shop now.
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default HeaderSlider;
