/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';

import ButtonPrimary from '../layout/ButtonPrimary';
import ButtonSecondary from '../layout/ButtonSecondary';

import JordanMenImg from '../../assets/jordan-men.jpg';
import JordanWomenImg from '../../assets/jordan-women.jpg';
import JordanKidsImg from '../../assets/jordan-kids.jpg';
import SkyJordanImg from '../../assets/sky-jordan.jpg';
import JordanElevatedImg from '../../assets/jordan-elevated.jpg';

const LastSections = () => {
  return (
    <>
      <div className="p-6 md:p-12 w-full">
        <h3 className="mb-6 text-2xl font-extrabold">
          JORDAN GEAR FOR THE ENTIRE FAM
        </h3>

        <div className="flex gap-3 w-full whitespace-nowrap overflow-x-scroll">
          <Link to="shop">
            <div className="w-full">
              <img src={JordanMenImg} alt="" className="w-full" />
              <h3 className="mt-12 mb-7 text-2xl font-extrabold">JORDAN MEN</h3>
              <ButtonPrimary>Shop</ButtonPrimary>
            </div>
          </Link>
          <Link to="shop">
            <div className="w-full">
              <img src={JordanWomenImg} alt="" className="w-full" />
              <h3 className="mt-12 mb-7 text-2xl font-extrabold">
                JORDAN WOMEN
              </h3>
              <ButtonPrimary>Shop</ButtonPrimary>
            </div>
          </Link>
          <Link to="shop">
            <div className="w-full">
              <img src={JordanKidsImg} alt="" className="w-full" />
              <h3 className="mt-12 mb-7 text-2xl font-extrabold">
                JORDAN KIDS
              </h3>
              <ButtonPrimary>Shop</ButtonPrimary>
            </div>
          </Link>
        </div>
      </div>

      <div className="p-12">
        <h3 className="mb-6 text-2xl font-extrabold">THE LATEST FROM JORDAN</h3>

        <div className="flex gap-3">
          <Link to="/shop" className="w-full relative">
            <div className="absolute z-10 bottom-12 left-12">
              <h4 className="mb-6 text-2xl leading-6 font-extrabold z-10">
                JORDAN 23/7 <br /> 'SKY JORDAN'
              </h4>
              <ButtonPrimary>Shop</ButtonPrimary>
            </div>

            <img src={SkyJordanImg} alt="" className="w-full" />
          </Link>

          <Link to="/shop" className="w-full relative">
            <div className="absolute z-10 bottom-12 left-12">
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
