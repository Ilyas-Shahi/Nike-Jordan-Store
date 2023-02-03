/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import HeaderSlider from './HeaderSlider';

import NikeLogo from '../../assets/svg/nike-logo.svg';
import JordanLogo from '../../assets/svg/jordan-logo.svg';
import SearchIcon from '../../assets/svg/search-icon.svg';
import HeartIcon from '../../assets/svg/heart-icon.svg';
import CartIcon from '../../assets/svg/cart-icon.svg';
import { useEffect, useState } from 'react';

const Header = () => {
  const [screenSize, setScreenSize] = useState(0);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [showElement, setShowElement] = useState(false);

  setTimeout(() => {
    setShowElement(showBackdrop);
  }, 400);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScreenSize(window.scrollY);
    });

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

        {!showBackdrop && (
          <ul className="flex gap-5 ml-48">
            <li className="text-base cursor-pointer">New & Featured</li>
            <li className="text-base cursor-pointer">Men</li>
            <li className="text-base cursor-pointer">Women</li>
            <li className="text-base cursor-pointer">Kids</li>
            <li className="text-base cursor-pointer">Sale</li>
          </ul>
        )}

        <div className="relative flex gap-4 transition-all w-max">
          <div
            className={`flex h-10 transition-all duration-500 ${
              showBackdrop ? 'w-[44vw]' : 'w-48'
            }`}
          >
            <img
              src={SearchIcon}
              alt=""
              onClick={() => setShowBackdrop(!showBackdrop)}
              className="h-full absolute top-0 left-0 p-1.5 rounded-full cursor-pointer hover:bg-gray-300 "
            />

            <input
              type="text"
              placeholder="Search"
              onFocus={() => setShowBackdrop(true)}
              className="w-full pl-12 text-base font-thin bg-gray-100 rounded-full focus:outline-none hover:bg-gray-200 placeholder:text-gray-300 hover:placeholder:text-gray-500"
            />
          </div>

          {!showBackdrop && (
            <button className="flex items-center justify-center w-10 h-10 px-1 py-2 rounded-full cursor-pointer hover:bg-gray-200">
              <img src={HeartIcon} alt="" />
            </button>
          )}
          {!showBackdrop && (
            <button className="flex items-center justify-center w-10 h-10 p-1 rounded-full cursor-pointer hover:bg-gray-200">
              <img src={CartIcon} alt="" />
            </button>
          )}
        </div>

        {showBackdrop && showElement && (
          <p
            className="transition-all cursor-pointer"
            onClick={() => setShowBackdrop(false)}
          >
            Cancel
          </p>
        )}
      </div>

      {showBackdrop && (
        <div
          className={`fixed bg-white w-full z-50 ${
            screenSize >= 30 && 'top-0'
          }`}
        >
          <div className="w-[40vw] mx-auto py-12">
            <p className="text-lg font-thin mb-4 text-gray-500">
              Popular Search Terms
            </p>
            <p className="text-xl mb-2">Air Force 1</p>
            <p className="text-xl mb-2">Jordan</p>
            <p className="text-xl mb-2">Air Max</p>
            <p className="text-xl mb-2">Blazer</p>
          </div>
        </div>
      )}

      <HeaderSlider />

      <div className={`${screenSize >= 140 && 'h-44'}`}></div>
      <div
        className={`transition-all z-40 bg-white flex items-center w-full mt-10 px-12 ${
          screenSize >= 140
            ? 'fixed top-0 mt-0 justify-between py-3'
            : 'flex-col justify-center'
        }`}
      >
        <img
          src={JordanLogo}
          alt=""
          className={`${screenSize >= 140 ? 'w-10 m-0' : 'w-28 mb-10'}`}
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

      {showBackdrop && (
        <div
          onClick={() => setShowBackdrop(false)}
          className="fixed bottom-0 left-0 z-40 w-screen h-[calc(100%-5rem)] bg-neutral-700 bg-opacity-20 backdrop-filter backdrop-blur-sm"
        ></div>
      )}
    </>
  );
};
export default Header;
