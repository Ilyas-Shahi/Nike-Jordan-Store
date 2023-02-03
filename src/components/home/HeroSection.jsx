import { Link } from 'react-router-dom';
import JordanImg from '../../assets/jordan.jpg';
import ButtonPrimary from '../layout/ButtonPrimary';

const HeroSection = () => {
  return (
    <Link to="#">
      <div className="p-12 pt-6">
        <img src={JordanImg} alt="" className="w-full" />

        <div className="p-10 text-center">
          <h1 className="text-5xl font-extrabold leading-10">
            AIR JORDAN XXXVII LOW <br />
            ‘HORSEPOWER’{' '}
          </h1>
          <p className="font-extrabold text-base leading-tight my-4 text">
            Sleek as an Italian sports car, this sneaker offers ankle mobility,
            broken-in <br />
            comfort, and heel lockdown for high-speed performance.
          </p>

          <ButtonPrimary>Shop</ButtonPrimary>
        </div>
      </div>
    </Link>
  );
};
export default HeroSection;
