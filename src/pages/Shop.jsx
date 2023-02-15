import { useState } from 'react';

import OptionFiltersHeader from '../components/shop/OptionFiltersHeader';
import FiltersSidebar from '../components/shop/FiltersSidebar';
import ProductsGrid from '../components/shop/ProductsGrid';
import useScrollTrigger from '../hooks/useScrollTrigger';

import './sidebarStyles.css';

const Shop = () => {
  const [showFilters, setShowFilters] = useState(true);
  const [sortByQuery, setSortByQuery] = useState(' | order(_createdAt asc)');
  const [genderFilter, setGenderFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  let query = `*[_type == 'product']${sortByQuery}`;

  const fixSidebar = useScrollTrigger(150);

  const handleShowFilters = (filter) => {
    setShowFilters(filter);
  };

  const handleSort = (option) => {
    switch (option) {
      case 'Featured':
        setSortByQuery(' | order(_createdAt asc)');
        break;
      case 'Newest':
        setSortByQuery(' | order(_createdAt desc)');
        break;
      case 'Price: High-Low':
        setSortByQuery(' | order(price desc)');
        break;
      case 'Price: Low-High':
        setSortByQuery(' | order(price asc)');
        break;
    }
  };

  return (
    <>
      <OptionFiltersHeader
        handleShowFilters={handleShowFilters}
        handleSort={handleSort}
      />

      <div className="flex px-12">
        <div
          className={`relative flex-auto transition-all duration-300  ${
            showFilters ? 'w-[16%]' : 'w-0'
          } `}
        >
          <div
            className={`sidebar h-screen pr-8 pb-16 overflow-y-scroll  ${
              fixSidebar ? 'sticky top-12' : ''
            }`}
          >
            {showFilters && <FiltersSidebar />}
          </div>
        </div>

        <div
          className={`flex-auto transition-all duration-300 ${
            showFilters ? 'w-[84%] ml-10' : 'w-full ml-0'
          }`}
        >
          <ProductsGrid query={query} />
        </div>
      </div>
    </>
  );
};
export default Shop;
