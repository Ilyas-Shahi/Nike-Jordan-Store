import { useEffect, useState } from 'react';
import JordanLogo from '../../assets/svg/jordan-logo.svg';

const JordanHeader = () => {
  const [scrollAnimation, setScrollAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 140) {
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
      <div className={`${scrollAnimation && 'h-48'}`}></div>

      <div
        className={`transition-all z-40 bg-white items-center w-full px-6 md:px-12 ${
          scrollAnimation
            ? 'fixed top-0 block md:flex md:justify-between py-3'
            : 'flex flex-col justify-center pt-8 md:pt-10'
        }`}
      >
        <img
          src={JordanLogo}
          alt=""
          className={`${
            scrollAnimation
              ? 'w-16 md:w-10 mx-6 my-2 md:m-0'
              : 'w-24 md:w-28 mb-10'
          }`}
        />

        <ul className="flex gap-6 md:w-auto whitespace-nowrap w-full overflow-x-scroll scroll scrollbar-hidden">
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

        <div className="w-0 md:w-28"></div>
      </div>
    </>
  );
};
export default JordanHeader;
