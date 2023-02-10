/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useCallback, useEffect, useState } from 'react';

import HeaderSlider from './HeaderSlider';

import NikeLogo from '../../assets/svg/nike-logo.svg';
import SearchIcon from '../../assets/svg/search-icon.svg';
import HeartIcon from '../../assets/svg/heart-icon.svg';
import CartIcon from '../../assets/svg/cart-icon.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrollAnimation, setScrollAnimation] = useState(false);

  const [showBackdrop, setShowBackdrop] = useState(false);
  const [showElement, setShowElement] = useState(false);

  setTimeout(() => {
    setShowElement(showBackdrop);
  }, 400);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 30) {
        setScrollAnimation(true);
      } else {
        setScrollAnimation(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={`flex items-center justify-between px-12 py-0 transition-all ${
          scrollAnimation && 'pb-10 -mt-10'
        }`}
      >
        <Link to="/">
          <img src={NikeLogo} alt="" className="w-20" />
        </Link>

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
            <Link to="/favorites">
              <button className="flex items-center justify-center w-10 h-10 px-1 py-2 rounded-full cursor-pointer hover:bg-gray-200">
                <img src={HeartIcon} alt="" />
              </button>
            </Link>
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
          className={`fixed bg-white w-full z-50 ${scrollAnimation && 'top-0'}`}
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
