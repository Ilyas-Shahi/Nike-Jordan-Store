import { useEffect, useRef, useState } from 'react';

import FiltersIcon from '../../assets/svg/filters-icon.svg';
import DownChevron from '../../assets/svg/chevron-down.svg';
import useScrollTrigger from '../../hooks/useScrollTrigger';

const sortOptions = [
  'Featured',
  'Newest',
  'Price: High-Low',
  'Price: Low-High',
];

const OptionFiltersHeader = ({ handleShowFilters, handleSort }) => {
  const [showFilters, setShowFilters] = useState(true);
  const [showSort, setShowSort] = useState(false);
  const [sortBy, setSortBy] = useState('Featured');

  const headerFixTrigger = useScrollTrigger(140);

  const sortRef = useRef();
  const sortBtnRef = useRef();

  useEffect(() => {
    handleShowFilters(showFilters);
  }, [handleShowFilters, showFilters]);

  useEffect(() => {
    handleSort(sortBy);
  }, [handleSort, sortBy]);

  useEffect(() => {
    const checkClick = (e) => {
      if (
        showSort &&
        sortRef.current &&
        sortBtnRef &&
        !sortRef.current.contains(e.target) &&
        !sortBtnRef.current.contains(e.target)
      ) {
        setShowSort(false);
      }
    };
    document.addEventListener('mousedown', checkClick);

    return () => document.removeEventListener('mousedown', checkClick);
  }, [showSort]);

  return (
    <>
      <div className={`${headerFixTrigger ? 'h-24' : 'h-0'}`} />
      <div
        className={`flex items-center justify-between px-12 bg-white w-full z-50 ${
          headerFixTrigger ? 'fixed top-0 h-12 pt-2 pb-4' : 'h-24 pt-2 pb-6'
        }`}
      >
        <div>
          {!headerFixTrigger && <p>Jordan / Shoes</p>}
          <h2
            className={`transition-all ${
              headerFixTrigger ? 'text-lg' : 'text-2xl'
            }`}
          >
            Jordan Shoes & Sneakers (243)
          </h2>
        </div>
        <div className="relative flex gap-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex gap-3"
          >
            {showFilters ? 'Hide' : 'Show'} Filters
            <img src={FiltersIcon} alt="" />
          </button>
          <button
            ref={sortBtnRef}
            className="flex gap-3"
            onClick={() => setShowSort(!showSort)}
          >
            Sort By: <span className="text-gray-600">{sortBy}</span>
            <img
              src={DownChevron}
              alt=""
              className={`w-3 mt-1.5 transition-all ${
                showSort && 'rotate-180'
              }`}
            />
          </button>

          <div
            ref={sortRef}
            className={`absolute transition-all duration-300 overflow-hidden right-0 flex flex-col items-end px-8 text-lg text-right bg-white rounded-3xl top-10 ${
              showSort ? 'h-36 py-3' : 'h-0 py-0'
            }`}
          >
            {sortOptions.map((option, i) => (
              <button
                key={i}
                onClick={() => {
                  setSortBy(option);
                  setShowSort(false);
                }}
                className={`hover:text-gray-500 ${
                  sortBy == option && 'hover:cursor-not-allowed text-gray-500'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default OptionFiltersHeader;
