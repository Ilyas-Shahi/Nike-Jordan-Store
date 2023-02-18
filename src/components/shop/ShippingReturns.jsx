import { useState } from 'react';

import ChevronDown from '../../assets/svg/chevron-down.svg';

const ShippingReturns = () => {
  const [showOption, setShowOption] = useState(false);

  return (
    <div className="pt-6 pb-3 border-t">
      <button
        onClick={() => setShowOption(!showOption)}
        className="flex justify-between w-full mb-4 text-xl"
      >
        <span>Free Shipping & Returns</span>

        <img
          src={ChevronDown}
          alt=""
          className={`w-3 mt-1 transition-all ${showOption && 'rotate-180'}`}
        />
      </button>

      <div
        className={`overflow-hidden p-1 pb-6 ${
          showOption ? 'animate-heightEntrance' : 'hidden'
        }`}
      >
        <p>
          Free standard shipping and free 60-day returns for Nike Members.{' '}
          <span className="underline">Learn more.</span>{' '}
          <span className="underline">Return policy exclusions apply.</span>{' '}
          <br />
          <br />
          <span className="underline">
            Pick-up available at select Nike Stores.
          </span>
        </p>
      </div>
    </div>
  );
};
export default ShippingReturns;
