import { useState } from 'react';

import ChevronDown from '../../assets/svg/chevron-down.svg';
import StarIcon from '../../assets/svg/star-icon.svg';

const Reviews = () => {
  const [showOption, setShowOption] = useState(false);

  return (
    <div className="pt-6 pb-3 border-t border-b">
      <button
        onClick={() => setShowOption(!showOption)}
        className="flex justify-between w-full mb-4 text-xl"
      >
        <span>Reviews (2)</span>

        <div className="flex">
          {[...Array(5)].map((v, i) => (
            <img key={i} src={StarIcon} alt="" className="w-4 mt-1 mr-1" />
          ))}

          <img
            src={ChevronDown}
            alt=""
            className={`w-3 mt-1 ml-2 transition-all ${
              showOption && 'rotate-180'
            }`}
          />
        </div>
      </button>

      <div
        className={`overflow-hidden pb-20 ${
          showOption ? 'animate-heightEntrance' : 'hidden'
        }`}
      >
        <div className="flex mt-4 mb-2">
          {[...Array(5)].map((v, i) => (
            <img key={i} src={StarIcon} alt="" className="w-4 mt-1 mr-1" />
          ))}
          <p className="mt-2 ml-3">5 Stars</p>
        </div>

        <p className="border-b inline border-gray-800 pb-1.5">Write a Review</p>

        <div className="mt-10">
          <p className="text-base">Great fast shoe</p>

          <div className="flex mb-3">
            {[...Array(5)].map((v, i) => (
              <img key={i} src={StarIcon} alt="" className="w-3 mt-1 mr-1" />
            ))}
            <p className="mt-1 ml-6 text-gray-500">
              M. Ilyas Shahi - Feb 10, 2023
            </p>
          </div>

          <p>
            You definitely have to get used to the cushion of this shoe and
            practice with the lacing to get that tight snug fit. This shoe makes
            you want to run fast but side to side movements has a slight delay.
          </p>
        </div>

        <div className="mt-10">
          <p className="text-base">sick great shoes worth it</p>

          <div className="flex mb-3">
            {[...Array(5)].map((v, i) => (
              <img key={i} src={StarIcon} alt="" className="w-3 mt-1 mr-1" />
            ))}
            <p className="mt-1 ml-6 text-gray-500">Joshua - Jan 29, 2023</p>
          </div>

          <p>sick these are the best</p>
        </div>

        <p className="border-b w-max mt-10 border-gray-800 pb-1.5">
          More Reviews
        </p>
      </div>
    </div>
  );
};
export default Reviews;
