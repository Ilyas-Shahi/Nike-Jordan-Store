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

const Header = () => {
  const [scrollAnimation, setScrollAnimation] = useState(false);

  const [showBackdrop, setShowBackdrop] = useState(false);
  const [showElement, setShowElement] = useState(false);

  const cartItemsNum = useSelector((state) => state.cart.cartItems)?.length;

  const showNotification = useSelector(
    (state) => state.notification.showNotification
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();

    if (e.target[1].value) {
      console.log(e.target[1].value);
      navigate('/shop');

      dispatch(setSearchFilter(e.target[1].value));
      setShowBackdrop(false);
    }
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
      <div
        className={`flex items-center justify-between bg-white z-50 px-6 md:px-12 py-0 transition-all ${
          scrollAnimation && 'pb-10 -mt-10'
        } ${showNotification && 'sticky top-0'}`}
      >
        <Link to="/">
          <img
            src={NikeLogo}
            alt=""
            className="w-16 md:w-20 md:h-16 object-cover"
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

        <div className="relative flex gap-4 transition-all w-max justify-end">
          <form
            onSubmit={searchHandler}
            className={`flex h-10 transition-all duration-500 ${
              showBackdrop ? 'w-[44vw]' : 'w-48'
            }`}
          >
            <button type="submit">
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
              onFocus={() => setShowBackdrop(true)}
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

          <Link to="#" className="md:hidden">
            <button className="flex items-center justify-center w-10 h-10 px-1 py-2 rounded-full cursor-pointer md:hidden hover:bg-gray-200">
              <img src={HamburgerMenuIcon} alt="" />
            </button>
          </Link>
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

      {showNotification && <Notification />}

      {showBackdrop && (
        <div
          className={`fixed bg-white w-full z-50 ${scrollAnimation && 'top-0'}`}
        >
          <div className="w-[40vw] mx-auto py-12">
            <p className="mb-4 text-lg font-thin text-gray-500">
              Popular Search Terms
            </p>
            <p className="mb-2 text-xl">Air Jordan 1</p>
            <p className="mb-2 text-xl">Jordan 5</p>
            <p className="mb-2 text-xl">Air Jordan XXXVII</p>
            <p className="mb-2 text-xl">Air Jordan 5 Retro</p>
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
