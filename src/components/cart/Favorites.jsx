import { Link } from 'react-router-dom';
import SanityImage from '../layout/SanityImage';

const Favorites = ({ productData }) => {
  return (
    <>
      <h1 className="my-8 text-2xl">Favorites</h1>

      <div className="grid grid-cols-2 border-b mb-8">
        <div className="flex justify-between gap-8 pb-8 leading-relaxed">
          <SanityImage
            imageRef={productData?.gallery.images[0].asset._ref}
            className="object-cover w-40 h-40"
          />

          <div>
            <h3 className="">{productData?.title}</h3>

            <p className="">
              {productData?.categories.map((category, i) => (
                <span key={i} className="font-light text-gray-500">
                  {category}{' '}
                </span>
              ))}
            </p>

            <p className="font-light text-gray-500 ">
              Size{' '}
              <span className="pb-1 border-b border-gray-700 w-max">
                M 11 / W 12.5
              </span>
            </p>

            <button className="px-5 py-2 mt-6 border border-gray-400 rounded-3xl">
              Add to Bag
            </button>
          </div>

          <p className="ml-auto">${productData?.price.toFixed(2)}</p>
        </div>
      </div>

      <Link to="/favorites">
        <p className="border-b w-max pb-1 border-gray-400">
          View all Favorites
        </p>
      </Link>
    </>
  );
};
export default Favorites;
