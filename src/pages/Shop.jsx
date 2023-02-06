import { useState } from 'react';

import OptionFiltersHeader from '../components/shop/OptionFiltersHeader';
import FiltersSidebar from '../components/shop/FiltersSidebar';
import ProductsGrid from '../components/shop/ProductsGrid';

const Shop = () => {
  const [showFilters, setShowFilters] = useState(false);

  const handleShowFilters = (filter) => {
    setShowFilters(filter);
  };

  return (
    <>
      <OptionFiltersHeader handleShowFilters={handleShowFilters} />

      <div className="px-12 duration-700">
        <div
          className={`inline-block  transition-all duration-300 bg-slate-50 ${
            showFilters ? 'w-1/5' : 'w-0'
          } `}
        >
          {showFilters && <FiltersSidebar />}
        </div>
        <div
          className={`inline-block transition-all duration-300 ${
            showFilters ? 'w-4/5' : 'w-full'
          }`}
        >
          <ProductsGrid />
        </div>
      </div>
    </>
  );
};
export default Shop;
