import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper';

const HeaderSlider = (props) => {
  const { screenSize } = props;

  return (
    <div>
      <div
        className={`bg-gray-100 text-center p-2 border-b ${
          screenSize >= 60 && 'transition-all -mt-20'
        }`}
      >
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
            <div className=" flex flex-col">
              <span className="text-md">
                Looks to Love Sale | 20% Off Select Styles
              </span>
              <span className="text-sm">
                Log in and use code LOVE20 at checkout.
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex flex-col">
              <span className="text-md">
                Free Shipping + Returns, Free Membership, Exclusive Products
              </span>
              <span className="text-sm">Join Now</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex flex-col">
              <span className="text-md">Why Wait? Try Store Pickup</span>
              <span className="text-sm">
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
