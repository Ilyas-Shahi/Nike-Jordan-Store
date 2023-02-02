import HeaderSlider from './HeaderSlider';

import NikeLogo from '../../assets/nike-logo.svg';
import JordanLogo from '../../assets/jordan-logo.svg';
import SearchIcon from '../../assets/search-icon.svg';
import HeartIcon from '../../assets/heart-icon.svg';
import CartIcon from '../../assets/cart-icon.svg';
import { useEffect, useState } from 'react';

const Header = () => {
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScreenSize(window.scrollY);
    });
    // console.log(screenSize);

    return () => {
      window.removeEventListener('scroll', () => {
        setScreenSize(window.scrollY);
      });
    };
  }, [screenSize]);

  return (
    <>
      <div
        className={`flex items-center justify-between px-12 py-0 transition-all ${
          screenSize >= 30 && 'pb-10 -mt-10'
        }`}
      >
        <img src={NikeLogo} alt="" className="w-20" />

        <ul className="flex gap-5 ml-48">
          <li className="text-base cursor-pointer">New & Featured</li>
          <li className="text-base cursor-pointer">Men</li>
          <li className="text-base cursor-pointer">Women</li>
          <li className="text-base cursor-pointer">Kids</li>
          <li className="text-base cursor-pointer">Sale</li>
        </ul>

        <div className="relative flex gap-4">
          <div className="flex w-48 h-10 ">
            <img
              src={SearchIcon}
              alt=""
              className="h-full absolute top-0 left-0 p-1.5 rounded-full cursor-pointer hover:bg-gray-300 "
            />

            <input
              type="text"
              placeholder="Search"
              className="w-full pl-12 text-base font-thin bg-gray-100 rounded-full focus:outline-none hover:bg-gray-200 placeholder:text-gray-300 hover:placeholder:text-gray-500"
            />
          </div>

          <button className="flex items-center justify-center w-10 h-10 px-1 py-2 rounded-full cursor-pointer hover:bg-gray-200">
            <img src={HeartIcon} alt="" />
          </button>
          <button className="flex items-center justify-center w-10 h-10 p-1 rounded-full cursor-pointer hover:bg-gray-200">
            <img src={CartIcon} alt="" />
          </button>
        </div>
      </div>

      <HeaderSlider screenSize={screenSize} />

      <div
        className={`transition-all bg-white flex items-center w-full mt-10 px-12 ${
          screenSize >= 65
            ? 'fixed top-0 mt-0 justify-between py-3'
            : 'flex-col justify-center'
        }`}
      >
        <img
          src={JordanLogo}
          alt=""
          className={`${screenSize >= 65 ? 'w-10 m-0' : 'w-28 mb-10'}`}
        />

        <ul className="flex gap-6">
          <li className="text-base cursor-pointer hover:text-gray-500">
            New Releases
          </li>
          <li className="text-base cursor-pointer hover:text-gray-500">
            Jordan Basketball
          </li>
          <li className="text-base cursor-pointer hover:text-gray-500">
            Purpose & Community
          </li>
          <li className="text-base cursor-pointer hover:text-gray-500">Men</li>
          <li className="text-base cursor-pointer hover:text-gray-500">
            Women
          </li>
          <li className="text-base cursor-pointer hover:text-gray-500">Kids</li>
        </ul>

        <div className="w-28"></div>
      </div>
    </>
  );
};
export default Header;
