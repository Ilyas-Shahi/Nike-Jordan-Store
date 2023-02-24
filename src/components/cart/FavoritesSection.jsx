import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { addToCart } from '../../redux-store/cartSlice';
import { removeFromFavorites } from '../../redux-store/favoritesSlice';
import SanityImage from '../layout/SanityImage';

const FavoritesSection = () => {
  const favoriteItems = useSelector((state) => state.favorites.favoriteItems);

  return (
    <>
      <h1 className="my-8 mt-20 text-xl md:text-2xl">Favorites</h1>

      <div className="md:grid grid-cols-2 gap-4 mb-8 border-b">
        {favoriteItems.map((item, index) => {
          if (index < 2) {
            return <FavoriteItem key={index} id={item.id} size={item.size} />;
          }
        })}
      </div>

      <Link to="/favorites">
        <p className="pb-1 border-b border-gray-400 w-max mb-8 md:mb-0">
          View all Favorites
        </p>
      </Link>
    </>
  );
};

const FavoriteItem = ({ id, size }) => {
  const productData = useFetch(`*[_id == '${id}']`)[0]?.result[0];

  const dispatch = useDispatch();

  return (
    <div className="flex justify-between gap-4 md:gap-8 pb-8 leading-relaxed">
      <Link to={`/shop/${productData?.slug.current}/?id=${id}`}>
        <SanityImage
          imageRef={productData?.gallery.images[0].asset._ref}
          className="object-cover w-24 md:w-40 h-24 md:h-40"
        />
      </Link>

      <div>
        <Link to={`/shop/${productData?.slug.current}/?id=${id}`}>
          <h3 className="text-sm md:text-base">{productData?.title}</h3>
        </Link>

        <p className="mb-2">
          {productData?.categories.map((category, i) => (
            <span
              key={i}
              className="font-light text-sm md:text-base text-gray-500"
            >
              {category}{' '}
            </span>
          ))}
        </p>

        {size ? (
          <p className="font-light text-sm md:text-base text-gray-500 ">
            Size{' '}
            <span className="pb-1 border-b border-gray-700 w-max">{size}</span>
          </p>
        ) : (
          <p className="font-light text-gray-500 border-b text-sm md:text-base border-gray-500 w-max">
            <Link to="#">Select Size</Link>
          </p>
        )}

        <button
          className="px-5 py-2 mt-6 border border-gray-400 rounded-3xl"
          onClick={() => {
            dispatch(addToCart({ id, size }));
            dispatch(removeFromFavorites(id));
          }}
        >
          Add to Bag
        </button>
      </div>

      <p className="ml-auto">${productData?.price.toFixed(2)}</p>
    </div>
  );
};

export default FavoritesSection;
