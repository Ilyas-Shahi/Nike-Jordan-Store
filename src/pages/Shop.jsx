import { useState } from 'react';

import OptionFiltersHeader from '../components/shop/OptionFiltersHeader';
import FiltersSidebar from '../components/shop/FiltersSidebar';
import ProductsGrid from '../components/shop/ProductsGrid';
import useScrollTrigger from '../hooks/useScrollTrigger';

import './sidebarStyles.css';

const Shop = () => {
  const [showFilters, setShowFilters] = useState(true);

  const fixSidebar = useScrollTrigger(150);

  const handleShowFilters = (filter) => {
    setShowFilters(filter);
  };

  return (
    <>
      <OptionFiltersHeader handleShowFilters={handleShowFilters} />

      <div className="flex px-12">
        <div
          className={`relative flex-auto transition-all duration-300  ${
            showFilters ? 'w-[15%]' : 'w-0'
          } `}
        >
          <div
            className={`sidebar h-screen overflow-y-scroll  ${
              fixSidebar ? 'sticky top-12' : ''
            }`}
          >
            {showFilters && <FiltersSidebar />}
          </div>
        </div>

        <div
          className={`flex-auto transition-all duration-300 ${
            showFilters ? 'w-[85%] ml-10' : 'w-full ml-0'
          }`}
        >
          <ProductsGrid />
        </div>
      </div>
    </>
  );
};
export default Shop;
