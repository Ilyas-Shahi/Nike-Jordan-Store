import { useDispatch, useSelector } from 'react-redux';

import FormCheck from '../layout/FormCheck';
import FilterColor from './FilterColor';
import FilterOption from './FilterOption';

import CrossIcon from '../../assets/svg/cross-icon.svg';
import { setSortFilter } from '../../redux-store/filtersSlice';

const FiltersSidebar = ({ handleShowFilters }) => {
  const sortBy = useSelector((state) => state.filters.sortBy);

  const dispatch = useDispatch();

  return (
    <div className="w-full">
      <div className="flex md:hidden justify-between mb-4">
        <p>Filter</p>
        <button
          onClick={() => handleShowFilters(false)}
          className="bg-gray-200 rounded-full h-8 w-8 p-1 fixed top-4 right-8 z-40"
        >
          <img src={CrossIcon} alt="" />
        </button>
      </div>

      <div className="pt-3 border-b pb-3 md:hidden">
        <form
          onChange={(e) => {
            dispatch(setSortFilter(e.target.value));
          }}
        >
          <div className="mb-4">
            <input
              className="w-5 h-5"
              type="radio"
              value="Featured"
              name="sort"
              id="Featured"
              checked={sortBy === 'Featured'}
            />
            <label
              htmlFor="Featured"
              className="text-lg ml-2 cursor-pointer hover:text-gray-600"
            >
              Featured
            </label>
          </div>

          <div className="mb-4">
            <input
              className="w-5 h-5"
              type="radio"
              value="Newest"
              name="sort"
              id="Newest"
              checked={sortBy === 'Newest'}
            />
            <label
              htmlFor="Newest"
              className="text-lg ml-2 cursor-pointer hover:text-gray-600"
            >
              Newest
            </label>
          </div>

          <div className="mb-4">
            <input
              className="w-5 h-5"
              type="radio"
              value="Price: High-Low"
              name="sort"
              id="Price: High-Low"
              checked={sortBy === 'Price: High-Low'}
            />
            <label
              htmlFor="Price: High-Low"
              className="text-lg ml-2 cursor-pointer hover:text-gray-600"
            >
              Price: High-Low
            </label>
          </div>

          <div className="mb-4">
            <input
              className="w-5 h-5"
              type="radio"
              value="Price: Low-High"
              name="sort"
              id="Price: Low-High"
              checked={sortBy === 'Price: Low-High'}
            />
            <label
              htmlFor="Price: Low-High"
              className="text-lg ml-2 cursor-pointer hover:text-gray-600"
            >
              Price: Low-High
            </label>
          </div>
        </form>
      </div>

      <FilterOption title="Gender">
        <FormCheck label="Men" id={`"Men's"`} />
        <FormCheck label="Women" id={`"Women's"`} />
        <FormCheck label="Unisex" id={`"Men's", "Women's"`} />
      </FilterOption>

      <FilterOption title="Kids">
        <FormCheck label="Boys" id="boys" />
        <FormCheck label="Girls" id="girls" />
      </FilterOption>

      <FilterOption title="Price">
        <FormCheck label="$0 - $25" id="0-25" />
        <FormCheck label="$25 - $50" id="25-50" />
        <FormCheck label="$50 - $100" id="50-100" />
        <FormCheck label="$100 - $150" id="100-150" />
        <FormCheck label="Over $150" id="150-1000" />
      </FilterOption>

      <FilterOption title="Color">
        <div className="grid grid-cols-3 gap-3">
          <FilterColor name="Purple" color="bg-purple-800" id={`"purple"`} />
          <FilterColor name="Black" color="bg-black" id={`"black"`} />
          <FilterColor name="Red" color="bg-red-600" id={`"red"`} />
          <FilterColor name="Orange" color="bg-orange-500" id={`"orange"`} />
          <FilterColor name="Blue" color="bg-blue-500" id={`"blue"`} />
          <FilterColor name="White" color="bg-white" id={`"white"`} />
          <FilterColor name="Brown" color="bg-yellow-800" id={`"brown"`} />
          <FilterColor name="Green" color="bg-green-500" id={`"green"`} />
          <FilterColor name="Yellow" color="bg-yellow-300" id={`"yellow"`} />
          <FilterColor name="Grey" color="bg-gray-400" id={`"grey"`} />
          <FilterColor name="Pink" color="bg-pink-400" id={`"pink"`} />
        </div>
      </FilterOption>

      <FilterOption title="Shoe Height">
        <FormCheck label="Low Top" id="low-top" />
        <FormCheck label="Mid Top" id="mid-top" />
        <FormCheck label="High Top" id="high-top" />
      </FilterOption>

      <FilterOption title="Width">
        <FormCheck label="Regular" id="regular" />
      </FilterOption>

      <FilterOption title="Surface">
        <FormCheck label="Hard Ground" id="hard-ground" />
        <FormCheck label="Turf" id="turf" />
      </FilterOption>
    </div>
  );
};
export default FiltersSidebar;
