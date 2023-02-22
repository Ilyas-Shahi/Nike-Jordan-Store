import { Link, useLocation } from 'react-router-dom';

import FacebookIcon from '../../assets/svg/facebook.svg';
import TwitterIcon from '../../assets/svg/twitter.svg';
import YoutubeIcon from '../../assets/svg/youtube.svg';
import InstaIcon from '../../assets/svg/insta.svg';
import LocationWhite from '../../assets/svg/location-icon-white.svg';

const jordanShoesList = [
  'All Jordan Shoes',
  'Air Jordan 1',
  'Air Jordan 11',
  'Air Jordan 13',
  'Jordan Retro',
  'Basketball Shoes',
  'Lifestyle Shoes',
  'Russell Westbrook Shoes',
  "Women's Jordan Shoes",
  'New Jordan Releases',
];

const jordanClothingList = [
  'All Jordan Clothing',
  'New Jordan Clothing',
  'Basketball Clothing',
  'Tops & T-Shirts',
  'Hoodies',
  'Jackets',
  'Shorts',
  'Pants',
  'Tights & Leggings',
];

const jordanGearList = [
  'All Jordan Gear',
  'Basketball Gear',
  'Training Gear',
  'Bags & Backpacks',
  'Hats & Beanies',
  'Socks',
  'Basketballs',
];

const featuredList = [
  'New Jordan Releases',
  "Kids' Jordan",
  'Russell Westbrook Collection',
];

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === '/' && (
        <div className="justify-center gap-20 p-6 md:p-12 md:flex group">
          <ul className="text-gray-400 pointer-events-none hover:h-[360px] flex flex-col gap-1.5 h-10 md:h-40 overflow-hidden group-hover:md:h-96 transition-all duration-500">
            <li className="mb-4 text-black pointer-events-auto">
              Jordan Shoes
            </li>
            {jordanShoesList.map((item, index) => (
              <li key={index}>
                <Link to="#">{item}</Link>
              </li>
            ))}
          </ul>
          <ul className="text-gray-400 pointer-events-none hover:h-80 flex flex-col gap-1.5 h-10 md:h-40 overflow-hidden group-hover:md:h-96 transition-all duration-500">
            <li className="mb-4 text-black pointer-events-auto">
              Jordan Clothing
            </li>
            {jordanClothingList.map((item, index) => (
              <li key={index}>
                <Link to="#">{item}</Link>
              </li>
            ))}
          </ul>
          <ul className="text-gray-400 pointer-events-none hover:h-64 flex flex-col gap-1.5 h-10 md:h-40 overflow-hidden group-hover:md:h-96 transition-all duration-500">
            <li className="mb-4 text-black pointer-events-auto">Jordan Gear</li>
            {jordanGearList.map((item, index) => (
              <li key={index}>
                <Link to="#">{item}</Link>
              </li>
            ))}
          </ul>
          <ul className="text-gray-400 pointer-events-none hover:h-36 flex flex-col gap-1.5 h-10 md:h-40 overflow-hidden group-hover:md:h-96 transition-all duration-500">
            <li className="mb-4 text-black pointer-events-auto">Featured</li>
            {featuredList.map((item, index) => (
              <li key={index}>
                <Link to="#">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="px-2 py-6 text-white md:p-12 bg-neutral-900">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-col justify-between w-full gap-4 md:flex-row">
            <ul className="flex flex-col gap-3 p-4 text-xs font-bold tracking-tighter border-b border-gray-800 md:p-0 md:border-b-0">
              <li>GIFT CARDS</li>
              <li>PROMOTIONS</li>
              <li>FIND A STORE</li>
              <li>SIGN UP FOR EMAIL</li>
              <li>BECOME A MEMBER</li>
              <li>NIKE JOURNAL</li>
              <li>SEND US FEEDBACK</li>
            </ul>

            <ul className="flex flex-col h-4 gap-3 px-4 mb-6 overflow-hidden text-xs transition-all duration-700 pointer-events-none text-neutral-400 md:h-auto md:px-0 hover:h-48 ">
              <li className="text-xs font-bold tracking-tighter text-white pointer-events-auto">
                GET HELP
              </li>
              <li>Order status</li>
              <li>Shipping and Delivery</li>
              <li>Returns</li>
              <li>Payment Options</li>
              <li>Gif Card Balance</li>
              <li>Contact Us</li>
            </ul>

            <ul className="flex flex-col h-4 gap-3 px-4 mb-6 overflow-hidden text-xs transition-all duration-700 pointer-events-none text-neutral-400 md:h-auto md:px-0 hover:h-48 focus:h-40">
              <li className="text-xs font-bold tracking-tighter text-white pointer-events-auto">
                ABOUT NIKE
              </li>
              <li>News</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Purpose</li>
              <li>Sustainability</li>
            </ul>
          </div>

          <div className="flex items-start w-full gap-3 px-4 md:px-0 md:justify-end">
            <img
              src={TwitterIcon}
              alt=""
              className="cursor-pointer w-7 md:w-9"
            />
            <img
              src={FacebookIcon}
              alt=""
              className="cursor-pointer w-7 md:w-9"
            />
            <img
              src={YoutubeIcon}
              alt=""
              className="cursor-pointer w-7 md:w-9"
            />
            <img src={InstaIcon} alt="" className="cursor-pointer w-7 md:w-9" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row px-4 md:px-0 justify-between mt-12 md:-mb-8">
          <div className="flex flex-col md:flex-row mb-12 md:mb-0 gap-2">
            <div className="flex gap-2">
              <img src={LocationWhite} alt="" className="w-4" />
              <p className="text-xs">United States</p>
            </div>
            <p className="text-xs text-neutral-400">
              © 2023 Nike, Inc. All Rights Reserved
            </p>
          </div>

          <ul className="flex flex-col md:flex-row gap-8 text-xs text-neutral-400">
            <li>Guides</li>
            <li>Terms of Sale</li>
            <li>Terms of Use</li>
            <li>Nike Privacy Policy</li>
            <li> CA Supply Chains Act</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Footer;
