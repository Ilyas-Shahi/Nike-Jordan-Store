import { useSelector } from 'react-redux';

import CrossIcon from '../../assets/svg/cross-icon.svg';
import Chevron from '../../assets/svg/chevron.svg';
import UserIcon from '../../assets/svg/user-icon.svg';
import HeartIcon from '../../assets/svg/heart-icon.svg';
import CartIcon from '../../assets/svg/cart-icon.svg';
import OrdersIcon from '../../assets/svg/orders-icon.svg';
import StoreIcon from '../../assets/svg/store-icon.svg';
import SupportIcon from '../../assets/svg/support-icon.svg';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MobileMenu = ({ setShowMobileMenu }) => {
  const cartItemsNum = useSelector((state) => state.cart.cartItems)?.length;

  const navigate = useNavigate();

  const navigateToShop = () => {
    navigate('/shop');
    setShowMobileMenu(false);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 z-50 h-screen bg-white w-80 overflow-y-scroll">
        <div className="px-8 py-4 text-right main-menu">
          <button
            onClick={() => setShowMobileMenu(false)}
            className="w-8 h-8 p-1 mb-4 rounded-full hover:bg-gray-200"
          >
            <img src={CrossIcon} alt="" />
          </button>
          <button className="flex w-full gap-2 mb-8">
            <img src={UserIcon} alt="" />
            Sign up / Log in
            <img src={Chevron} alt="" className="ml-auto rotate-180" />
          </button>

          <button
            onClick={navigateToShop}
            className="flex items-center w-full gap-2 mb-4 text-2xl"
          >
            New Arrivals
            <img src={Chevron} alt="" className="ml-auto rotate-180" />
          </button>
          <button
            onClick={navigateToShop}
            className="flex items-center w-full gap-2 mb-4 text-2xl"
          >
            Men
            <img src={Chevron} alt="" className="ml-auto rotate-180" />
          </button>
          <button
            onClick={navigateToShop}
            className="flex items-center w-full gap-2 mb-4 text-2xl"
          >
            Women
            <img src={Chevron} alt="" className="ml-auto rotate-180" />
          </button>
          <button
            onClick={navigateToShop}
            className="flex items-center w-full gap-2 mb-4 text-2xl"
          >
            Kids
            <img src={Chevron} alt="" className="ml-auto rotate-180" />
          </button>
          <button
            onClick={navigateToShop}
            className="flex items-center w-full gap-2 mb-4 text-2xl"
          >
            Accessories
            <img src={Chevron} alt="" className="ml-auto rotate-180" />
          </button>
          <button
            onClick={navigateToShop}
            className="flex items-center w-full gap-2 mb-4 text-2xl"
          >
            Sale
            <img src={Chevron} alt="" className="ml-auto rotate-180" />
          </button>

          <button
            onClick={() => {
              navigate('/favorites');
              setShowMobileMenu(false);
            }}
            className="flex w-full gap-2 mb-5 mt-28"
          >
            <img src={HeartIcon} alt="" />
            Favorites
          </button>
          <button
            onClick={() => {
              navigate('/cart');
              setShowMobileMenu(false);
            }}
            className="flex w-full gap-2 mb-5"
          >
            <span className="relative">
              <img src={CartIcon} alt="" />
              <span className="absolute text-[10px] top-[7px] left-[9px]">
                {cartItemsNum > 0 && cartItemsNum}
              </span>
            </span>
            Bag
          </button>
          <button
            onClick={() => {
              navigate('/cart');
              setShowMobileMenu(false);
            }}
            className="flex w-full gap-2 mb-5"
          >
            <img src={OrdersIcon} alt="" />
            Orders
          </button>
          <button
            onClick={() => {
              navigate('/shop');
              setShowMobileMenu(false);
            }}
            className="flex w-full gap-2 mb-5"
          >
            <img src={StoreIcon} alt="" />
            Find a Store
          </button>
          <button className="flex w-full gap-2 mb-5">
            <img src={SupportIcon} alt="" />
            Help
          </button>
        </div>
      </div>

      <div className="fixed top-0 left-0 z-40 w-screen h-screen bg-neutral-700 bg-opacity-20 backdrop-filter backdrop-blur-sm"></div>
    </>
  );
};
export default MobileMenu;
