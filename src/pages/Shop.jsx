/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import useIsMobileBreakpoint from '../hooks/useIsMobileBreakpoint';

import OptionFiltersHeader from '../components/shop/OptionFiltersHeader';
import FiltersSidebar from '../components/shop/FiltersSidebar';
import ProductsGrid from '../components/shop/ProductsGrid';
import useScrollTrigger from '../hooks/useScrollTrigger';

import './sidebarStyles.css';

const Shop = () => {
  const [showFilters, setShowFilters] = useState();

  const numOfShownProducts = useSelector(
    (state) => state.filters.numOfShownProducts
  );

  const sortFilter = useSelector((state) => state.filters.sortFilter);
  const genderFilter = useSelector((state) => state.filters.genderFilter);
  const priceFilter = useSelector((state) => state.filters.priceFilter);
  const kidsFilter = useSelector((state) => state.filters.kidsFilter);
  const colorFilter = useSelector((state) => state.filters.colorFilter);
  const searchFilter = useSelector((state) => state.filters.searchFilter);

  let query = `*[_type == 'product'${genderFilter}${priceFilter}${kidsFilter}${colorFilter}${searchFilter}]${sortFilter}`;

  const fixSidebar = useScrollTrigger(150);
  const isMobileScreen = useIsMobileBreakpoint();

  const handleShowFilters = (filter) => {
    setShowFilters(filter);
  };

  useEffect(() => {
    if (isMobileScreen && showFilters) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isMobileScreen, showFilters]);

  useEffect(() => {
    setShowFilters(!isMobileScreen);
  }, [isMobileScreen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <OptionFiltersHeader
        showFilters={showFilters}
        handleShowFilters={handleShowFilters}
      />

      <div className="md:flex px-1.5 md:px-12 pb-10">
        <div
          className={`absolute top-0 left-0 z-40 md:z-0 md:relative bg-white transition-all duration-300  ${
            showFilters ? 'w-full md:w-64 md:p-0' : 'w-0'
          } `}
        >
          <div
            className={`h-screen pb-16 overflow-y-scroll ${
              fixSidebar ? 'sticky top-12' : ''
            } ${!isMobileScreen ? 'sidebar' : ''}`}
          >
            <FiltersSidebar handleShowFilters={handleShowFilters} />
          </div>
        </div>

        <div
          className={`transition-all duration-300 w-full ${
            showFilters ? 'md:ml-14' : 'ml-0'
          }`}
        >
          <ProductsGrid query={query} />

          {!numOfShownProducts && (
            <h2 className="mx-auto mt-10 text-3xl w-max">
              Sorry, we couldn't find what you're looking for.
            </h2>
          )}
        </div>
      </div>
    </>
  );
};
export default Shop;
