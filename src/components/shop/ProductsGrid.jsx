import { useParams } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import SanityImage from '../layout/SanityImage';

const ProductsGrid = ({ width }) => {
  const products = useFetch(`*[_type == 'product'] | order(_createdAt asc)`);

  console.log(products);

  return (
    <div className="grid grid-cols-3 gap-3">
      {products[0]?.result.map((product) => {
        return (
          <div key={product._id}>
            <SanityImage
              imageRef={product.gallery.images[0].asset._ref}
              className="object-cover w-full transition-all h-2/3"
            />
            <span className="font-thin text-amber-800">
              {product.specialty}
            </span>
            <h3 className="text-base">{product.title}</h3>
            <p className="text-sm text-gray-600">
              {product.categories.map((category, index) => (
                <span key={index}>{category} </span>
              ))}
            </p>
            <p className="text-base">${product.price}</p>
          </div>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
