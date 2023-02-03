import { Link } from 'react-router-dom';

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
  return (
    <>
      <div className="flex justify-center gap-20 m-12 mx-auto w-max group">
        <ul className="text-gray-400 flex flex-col gap-1.5 h-40 overflow-hidden group-hover:h-96 transition-all duration-500">
          <li className="mb-4 text-black">Jordan Shoes</li>
          {jordanShoesList.map((item, index) => (
            <li key={index}>
              <Link to="#">{item}</Link>
            </li>
          ))}
        </ul>
        <ul className="text-gray-400 flex flex-col gap-1.5 h-40 overflow-hidden group-hover:h-96 transition-all duration-500">
          <li className="mb-4 text-black">Jordan Clothing</li>
          {jordanClothingList.map((item, index) => (
            <li key={index}>
              <Link to="#">{item}</Link>
            </li>
          ))}
        </ul>
        <ul className="text-gray-400 flex flex-col gap-1.5 h-40 overflow-hidden group-hover:h-96 transition-all duration-500">
          <li className="mb-4 text-black">Jordan Gear</li>
          {jordanGearList.map((item, index) => (
            <li key={index}>
              <Link to="#">{item}</Link>
            </li>
          ))}
        </ul>
        <ul className="text-gray-400 flex flex-col gap-1.5 h-40 overflow-hidden group-hover:h-96 transition-all duration-500">
          <li className="mb-4 text-black">Featured</li>
          {featuredList.map((item, index) => (
            <li key={index}>
              <Link to="#">{item}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-12 text-white bg-neutral-900">
        <div className="flex gap-4">
          <div className="flex justify-between w-full gap-4">
            <ul className="flex flex-col gap-3 text-xs font-bold tracking-tighter">
              <li>GIFT CARDS</li>
              <li>PROMOTIONS</li>
              <li>FIND A STORE</li>
              <li>SIGN UP FOR EMAIL</li>
              <li>BECOME A MEMBER</li>
              <li>NIKE JOURNAL</li>
              <li>SEND US FEEDBACK</li>
            </ul>

            <ul className="flex flex-col gap-3 text-xs text-neutral-400">
              <li className="text-xs font-bold tracking-tighter text-white">
                GET HELP
              </li>
              <li>Order status</li>
              <li>Shipping and Delivery</li>
              <li>Returns</li>
              <li>Payment Options</li>
              <li>Gif Card Balance</li>
              <li>Contact Us</li>
            </ul>

            <ul className="flex flex-col gap-3 text-xs text-neutral-400">
              <li className="text-xs font-bold tracking-tighter text-white">
                ABOUT NIKE
              </li>
              <li>News</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Purpose</li>
              <li>Sustainability</li>
            </ul>
          </div>

          <div className="flex w-full gap-3 justify-end items-start">
            <img src={TwitterIcon} alt="" className="w-9 cursor-pointer" />
            <img src={FacebookIcon} alt="" className="w-9 cursor-pointer" />
            <img src={YoutubeIcon} alt="" className="w-9 cursor-pointer" />
            <img src={InstaIcon} alt="" className="w-9 cursor-pointer" />
          </div>
        </div>

        <div className="flex justify-between mt-12 -mb-8">
          <div className="flex gap-2">
            <div className="flex gap-2">
              <img src={LocationWhite} alt="" className="w-4" />
              <p className="text-xs">United States</p>
            </div>
            <p className="text-xs text-neutral-400">
              © 2023 Nike, Inc. All Rights Reserved
            </p>
          </div>

          <ul className="flex gap-8 text-xs text-neutral-400">
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
