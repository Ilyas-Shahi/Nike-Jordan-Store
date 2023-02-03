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
      <div className="p-12">
        <h3 className="mb-6 text-2xl font-extrabold">
          JORDAN GEAR FOR THE ENTIRE FAM
        </h3>

        <div className="flex gap-3">
          <div>
            <img src={JordanMenImg} alt="" />
            <h3 className="mt-12 mb-7 text-2xl font-extrabold">JORDAN MEN</h3>
            <ButtonPrimary>Shop</ButtonPrimary>
          </div>
          <div>
            <img src={JordanWomenImg} alt="" />
            <h3 className="mt-12 mb-7 text-2xl font-extrabold">JORDAN WOMEN</h3>
            <ButtonPrimary>Shop</ButtonPrimary>
          </div>
          <div>
            <img src={JordanKidsImg} alt="" />
            <h3 className="mt-12 mb-7 text-2xl font-extrabold">JORDAN KIDS</h3>
            <ButtonPrimary>Shop</ButtonPrimary>
          </div>
        </div>
      </div>

      <div className="p-12">
        <h3 className="mb-6 text-2xl font-extrabold">THE LATEST FROM JORDAN</h3>

        <div className="flex gap-3">
          <Link to="#" className="h-1/2 w-full">
            <div
              style={{ backgroundImage: `url(${SkyJordanImg})` }}
              className="h-[750px] w-full  bg-no-repeat flex items-end bg-cover bg-center p-12"
            >
              <div>
                <h4 className="mb-6 text-2xl leading-6 font-extrabold">
                  JORDAN 23/7 <br /> 'SKY JORDAN'
                </h4>
                <ButtonPrimary>Shop</ButtonPrimary>
              </div>
            </div>
          </Link>

          <Link to="#" className="h-1/2 w-full">
            <div
              style={{ backgroundImage: `url(${JordanElevatedImg})` }}
              className="h-[750px] w-full  bg-no-repeat flex items-end bg-cover bg-center p-12"
            >
              <div>
                <h4 className="mb-6 text-2xl text-white font-extrabold">
                  ELEVATED EVERYDAY ESSENTIALS
                </h4>
                <ButtonSecondary>Shop</ButtonSecondary>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default LastSections;
