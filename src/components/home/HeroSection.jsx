import { Link } from 'react-router-dom';
import HeroDesktopImg from '../../assets/hero-img.jpg';
import HeroMobileImg from '../../assets/hero-img-mobile.jpg';
import ButtonPrimary from '../layout/ButtonPrimary';
import useIsMobileBreakpoint from '../../hooks/useIsMobileBreakpoint';

const HeroSection = () => {
  const isMobileScreen = useIsMobileBreakpoint();

  return (
    <Link to="/shop/air-jordan-xxxvii-low-0.6229247868281476/?id=a931a362-de1c-48c2-b638-d63f2a1999ab">
      <div className="p-6 pt-6 md:p-12">
        <img
          src={isMobileScreen ? HeroMobileImg : HeroDesktopImg}
          alt=""
          className="w-full"
        />

        <div className="py-6 md:p-10 md:text-center">
          <div className="text-base font-extrabold mb-">‘Dusk Til Dawn’</div>
          <h1 className="my-4 mb:my-6 text-4xl font-extrabold leading-8 md:text-5xl md:leading-10">
            AIR JORDAN XXXVII LOW
          </h1>
          <p className="mb-6 text-base font-extrabold leading-tight text">
            Play with passion in this new colorway that celebrates the unity{' '}
            <br className="hidden md:block" />
            and inclusivity of the game we love.
          </p>

          <ButtonPrimary>Shop</ButtonPrimary>
        </div>
      </div>
    </Link>
  );
};
export default HeroSection;
