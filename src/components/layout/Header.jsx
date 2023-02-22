/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import HeaderSlider from './HeaderSlider';
import Notification from './Notification';

import NikeLogo from '../../assets/svg/nike-logo.svg';
import SearchIcon from '../../assets/svg/search-icon.svg';
import HeartIcon from '../../assets/svg/heart-icon.svg';
import CartIcon from '../../assets/svg/cart-icon.svg';
import HamburgerMenuIcon from '../../assets/svg/hamburger-menu.svg';
import { setSearchFilter } from '../../redux-store/filtersSlice';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [scrollAnimation, setScrollAnimation] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [showBackdrop, setShowBackdrop] = useState(false);
  const [showElement, setShowElement] = useState(false);

  const [searchInputValue, setSearchInputValue] = useState('');

  const cartItemsNum = useSelector((state) => state.cart.cartItems)?.length;

  const showNotification = useSelector(
    (state) => state.notification.showNotification
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchHandler = () => {
    dispatch(setSearchFilter(searchInputValue));
    navigate('/shop');
    setShowBackdrop(false);
  };

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
      {showMobileMenu && (
        <MobileMenu
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
        />
      )}
      <div
        className={`flex items-center justify-between bg-white z-50 px-4 md:px-12 py-2 transition-all ${
          scrollAnimation && 'pb-10 -mt-10'
        } ${showNotification && 'sticky top-0'} ${
          showMobileMenu && 'overflow-hidden'
        }`}
      >
        <Link to="/">
          <img
            src={NikeLogo}
            alt=""
            className={`object-cover w-24 md:w-20 h-10 md:h-14 hover:opacity-70 ${
              showBackdrop && 'hidden md:block'
            }`}
          />
        </Link>

        {!showBackdrop && (
          <ul className="hidden gap-5 md:flex lg:ml-44">
            <li className="text-sm cursor-pointer md:text-base">
              New & Featured
            </li>
            <li className="text-sm cursor-pointer md:text-base">Men</li>
            <li className="text-sm cursor-pointer md:text-base">Women</li>
            <li className="text-sm cursor-pointer md:text-base">Kids</li>
            <li className="text-sm cursor-pointer md:text-base">Sale</li>
          </ul>
        )}

        <div className="relative flex justify-end gap-2 md:gap-4 transition-all w-full md:w-max">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              searchHandler();
            }}
            className={`flex h-10 transition-all duration-500 ${
              showBackdrop ? 'w-full md:w-[44vw]' : 'w-0 hidden md:flex md:w-48'
            }`}
          >
            <button type={showBackdrop ? 'button' : 'submit'}>
              <img
                src={SearchIcon}
                alt=""
                onClick={() => setShowBackdrop(!showBackdrop)}
                className="h-full absolute top-0 left-0 p-1.5 rounded-full cursor-pointer hover:bg-gray-300 "
              />
            </button>

            <input
              type="text"
              placeholder="Search"
              value={searchInputValue}
              onFocus={() => setShowBackdrop(true)}
              onChange={(e) => setSearchInputValue(e.target.value)}
              className="w-full pl-12 text-base font-thin bg-gray-100 rounded-full focus:outline-none hover:bg-gray-200 placeholder:text-gray-300 hover:placeholder:text-gray-500"
            />
          </form>

          {!showBackdrop && (
            <Link to="/favorites">
              <button className="items-center justify-center hidden w-10 h-10 px-1 py-2 rounded-full cursor-pointer md:flex hover:bg-gray-200">
                <img src={HeartIcon} alt="" />
              </button>
            </Link>
          )}
          {!showBackdrop && (
            <Link to="/cart">
              <button className="flex items-center justify-center w-10 h-10 p-1 rounded-full cursor-pointer hover:bg-gray-200">
                <img src={CartIcon} alt="" />
                <span className="absolute text-[10px] mt-1">
                  {cartItemsNum > 0 && cartItemsNum}
                </span>
              </button>
            </Link>
          )}

          <button
            onClick={() => setShowBackdrop(!showBackdrop)}
            className={`flex md:hidden items-center justify-center w-10 h-10 p-1 rounded-full cursor-pointer hover:bg-gray-200 ${
              showBackdrop && 'hidden'
            }`}
          >
            <img src={SearchIcon} alt="" />
          </button>

          {!showBackdrop && (
            <button
              onClick={() => setShowMobileMenu(true)}
              className="flex items-center justify-center w-10 h-10 px-1 py-2 rounded-full cursor-pointer md:hidden hover:bg-gray-200"
            >
              <img src={HamburgerMenuIcon} alt="" />
            </button>
          )}
        </div>

        {showBackdrop && showElement && (
          <p
            className="transition-all cursor-pointer ml-6 md:ml-0"
            onClick={() => setShowBackdrop(false)}
          >
            Cancel
          </p>
        )}
      </div>

      {showNotification && <Notification />}

      {showBackdrop && (
        <div
          className={`fixed bg-white w-full z-50 ${scrollAnimation && 'top-0'}`}
        >
          <div className="w-full md:w-[44vw] mx-auto p-12">
            <p className="mb-4 text-lg font-thin text-gray-500">
              Popular Search Terms
            </p>
            <p
              className="mb-2 text-xl cursor-pointer"
              onClick={() => setSearchInputValue('Air Jordan 1')}
            >
              Air Jordan 1
            </p>
            <p
              className="mb-2 text-xl cursor-pointer"
              onClick={() => setSearchInputValue('Jordan 3')}
            >
              Jordan 3
            </p>
            <p
              className="mb-2 text-xl cursor-pointer"
              onClick={() => setSearchInputValue('Air Jordan XXXVII')}
            >
              Air Jordan XXXVII
            </p>
            <p
              className="mb-2 text-xl cursor-pointer"
              onClick={() => setSearchInputValue('Air Jordan 5 Retro')}
            >
              Air Jordan 5 Retro
            </p>
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
