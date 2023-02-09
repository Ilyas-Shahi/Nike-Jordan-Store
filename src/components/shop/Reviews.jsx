import { useState } from 'react';

import ChevronDown from '../../assets/svg/chevron-down.svg';

const Reviews = () => {
  const [showOption, setShowOption] = useState(true);

  return (
    <div className="pt-3 border-t">
      <button
        onClick={() => setShowOption(!showOption)}
        className="flex justify-between w-full mb-4 text-lg font-light"
      >
        <span>Reviews</span>

        <img
          src={ChevronDown}
          alt=""
          className={`w-3 mt-1 transition-all ${showOption && 'rotate-180'}`}
        />
      </button>

      <div
        className={`overflow-hidden pb-6 ${
          showOption ? 'animate-heightEntrance' : 'hidden'
        }`}
      >
        <p>
          Free standard shipping and free 60-day returns for Nike Members. Learn
          more. Return policy exclusions apply. <br />
          <br />
          Pick-up available at select Nike Stores.
        </p>
      </div>
    </div>
  );
};
export default Reviews;
