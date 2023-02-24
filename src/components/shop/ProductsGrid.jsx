import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import { numOfShownProductsSetter } from '../../redux-store/filtersSlice';
import SanityImage from '../layout/SanityImage';

const ProductsGrid = ({ query }) => {
  const products = useFetch(`${query}`);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(numOfShownProductsSetter(products[0]?.result.length));
  }, [dispatch, products]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-max gap-1.5 text-sm md:text-base md:gap-4">
      {products[0]?.result.map((product, index) => {
        if (index < 24) {
          return (
            <div key={product._id} className="pb-2 xl:-mb-14">
              <Link to={`/shop/${product.slug.current}/?id=${product._id}`}>
                <SanityImage
                  imageRef={product.gallery.images[0].asset._ref}
                  className="object-cover w-full mb-3 transition-all h-52 md:h-[62%]"
                />

                <div className="px-2 md:px-0">
                  <span className="font-thin text-amber-800">
                    {product.specialty}
                  </span>
                  <h3>{product.title}</h3>
                  <p className="text-gray-400">
                    {product.categories.map((category, index) => (
                      <span key={index}>{category} </span>
                    ))}
                  </p>
                  <p className="text-gray-400">
                    {product.color.length}{' '}
                    {product.color.length > 1 ? 'Colors' : 'Color'}
                  </p>
                  <p className="text-sm md:text-[17px] mt-4">
                    ${product.price}
                  </p>
                </div>
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
};
export default ProductsGrid;
