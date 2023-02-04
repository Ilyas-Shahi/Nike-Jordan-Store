import { useState } from 'react';
import JordanLogo from '../../assets/svg/jordan-logo.svg';

const JordanHeader = () => {
  const [scrollAnimation, setScrollAnimation] = useState(false);

  return (
    <>
      <div className={`${scrollAnimation && 'h-44'}`}></div>

      <div
        className={`transition-all z-40 bg-white flex items-center w-full mt-10 px-12 ${
          scrollAnimation
            ? 'fixed top-0 mt-0 justify-between py-3'
            : 'flex-col justify-center'
        }`}
      >
        <img
          src={JordanLogo}
          alt=""
          className={`${scrollAnimation ? 'w-10 m-0' : 'w-28 mb-10'}`}
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
export default JordanHeader;
