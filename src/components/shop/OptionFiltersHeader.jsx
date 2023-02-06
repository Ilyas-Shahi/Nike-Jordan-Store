import { useEffect, useRef, useState } from 'react';

import FiltersIcon from '../../assets/svg/filters-icon.svg';
import DownChevron from '../../assets/svg/chevron-down.svg';

const sortOptions = [
  'Featured',
  'Newest',
  'Price: High-Low',
  'Price: Low-High',
];

const OptionFiltersHeader = ({ handleShowFilters }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [sortBy, setSortBy] = useState('Featured');
  const [scrollAnimation, setScrollAnimation] = useState(false);

  const showSortRef = useRef();

  handleShowFilters(showFilters);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 130) {
        setScrollAnimation(true);
      } else {
        setScrollAnimation(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`flex items-center justify-between h-24 px-12 pt-2 pb-6 bg-white w-full ${
        scrollAnimation && 'fixed top-0'
      }`}
    >
      <div>
        <p>Jordan / Shoes</p>
        <h2 className="text-2xl">Jordan Shoes & Sneakers (243)</h2>
      </div>
      <div className="relative flex gap-2">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex gap-2"
        >
          {showFilters ? 'Hide' : 'Show'} Filters{' '}
          <img src={FiltersIcon} alt="" />
        </button>
        <button className="flex gap-2" onClick={() => setShowSort(!showSort)}>
          Sort By: <span className="text-gray-600">{sortBy}</span>
          <img
            src={DownChevron}
            alt=""
            className={`w-5 mt-0.5 transition-all ${showSort && 'rotate-180'}`}
          />
        </button>

        <div
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
  );
};
export default OptionFiltersHeader;
