import { useState } from 'react';
import ChevronDown from '../../assets/svg/chevron-down.svg';
import FormCheck from '../layout/FormCheck';
import FilterColor from './FilterColor';
import FilterOption from './FilterOption';

const FiltersSidebar = () => {
  return (
    <div className="w-full">
      <FilterOption title="Gender">
        <FormCheck label="Men" id="men" />
        <FormCheck label="Women" id="women" />
        <FormCheck label="Unisex" id="unisex" />
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
        <FormCheck label="Over $150" id="150+" />
      </FilterOption>

      <FilterOption title="Color">
        <div className="grid grid-cols-3 gap-3">
          <FilterColor name="Purple" color="bg-purple-800" id="purple" />
          <FilterColor name="Black" color="bg-black" id="black" />
          <FilterColor name="Red" color="bg-red-600" id="red" />
          <FilterColor name="Orange" color="bg-orange-500" id="orange" />
          <FilterColor name="Blue" color="bg-blue-500" id="blue" />
          <FilterColor name="White" color="bg-white" id="white" />
          <FilterColor name="Brown" color="bg-yellow-800" id="brown" />
          <FilterColor name="Green" color="bg-green-500" id="green" />
          <FilterColor name="Yellow" color="bg-yellow-300" id="yellow" />
          <FilterColor name="Grey" color="bg-gray-400" id="grey" />
          <FilterColor name="Pink" color="bg-pink-400" id="pink" />
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
