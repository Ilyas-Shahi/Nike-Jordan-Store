import { useState } from 'react';
import ChevronDown from '../../assets/svg/chevron-down.svg';
import FormCheck from '../layout/FormCheck';

const FiltersSidebar = () => {
  const [showGender, setShowGender] = useState(true);
  const [showKids, setShowKids] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [showColor, setShowColor] = useState(true);

  return (
    <div className="w-full">
      <div className="pt-3 border-t">
        <button
          onClick={() => setShowGender(!showGender)}
          className="flex justify-between w-full mb-4 text-lg font-light"
        >
          <span>Gender</span>
          <img
            src={ChevronDown}
            alt=""
            className={`w-3 mt-1 transition-all ${showGender && 'rotate-180'}`}
          />
        </button>

        <form
          className={`overflow-hidden pb-6 ${
            showGender ? 'animate-heightEntrance' : 'hidden'
          }`}
        >
          <FormCheck label="Men" id="men" />
          <FormCheck label="Women" id="women" />
          <FormCheck label="Unisex" id="unisex" />
        </form>
      </div>

      <div className="pt-3 border-t">
        <button
          onClick={() => setShowKids(!showKids)}
          className="flex justify-between w-full mb-4 text-lg font-light"
        >
          <span>Kids</span>
          <img
            src={ChevronDown}
            alt=""
            className={`w-3 mt-1 transition-all ${showKids && 'rotate-180'}`}
          />
        </button>

        <form
          className={`overflow-hidden pb-6 ${
            showKids ? 'animate-heightEntrance' : 'hidden'
          }`}
        >
          <FormCheck label="Boys" id="boys" />
          <FormCheck label="Girls" id="girls" />
        </form>
      </div>
    </div>
  );
};
export default FiltersSidebar;
