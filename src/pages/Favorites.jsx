/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';

import useFetch from '../hooks/useFetch';
import SanityImage from '../components/layout/SanityImage';

import HeartIcon from '../assets/svg/heart-icon.svg';
import HeartFilledIcon from '../assets/svg/heart-filled.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux-store/cartSlice';
import { Link, useNavigate } from 'react-router-dom';
import { removeFromFavorites } from '../redux-store/favoritesSlice';
import { showNotification } from '../redux-store/notificationSlice';

const Favorites = () => {
  const favoriteItems = useSelector((state) => state.favorites.favoriteItems);
  const [edit, setEdit] = useState(false);

  return (
    <>
      {favoriteItems.length > 0 ? (
        <div className="flex justify-between items-center p-6 md:px-12">
          <h2 className="text-xl">
            {edit ? 'Manage Your Favorites' : 'Favorites'}
          </h2>
          <button
            onClick={() => setEdit(!edit)}
            className={`px-5 py-2 border rounded-full transition-all ${
              edit && 'bg-black text-white'
            }`}
          >
            {edit ? 'Done' : 'Edit'}
          </button>
        </div>
      ) : (
        <h2 className="p-12 text-xl h-80">No Favorites</h2>
      )}

      <div className="grid grid-cols-2 gap-4 p-3 md:gap-8 md:grid-cols-3 md:p-12">
        {favoriteItems.map((item, index) => (
          <FavoriteItem key={index} id={item.id} size={item.size} edit={edit} />
        ))}
      </div>
    </>
  );
};
export default Favorites;

// A Card component to render each favorite item
const FavoriteItem = ({ id, size, edit }) => {
  const productData = useFetch(`*[_id == '${id}']`)[0]?.result[0];
  const [unFavorite, setUnFavorite] = useState(false);

  const [removeList, setRemoveList] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToBagHandler = () => {
    if (size) {
      dispatch(addToCart({ id, size }));
      dispatch(showNotification({ type: 'Cart', content: { id, size } }));
    } else {
      navigate(`/shop/${productData?.slug.current}/?id=${id}&noSize=true`);
    }
  };

  const removeFavoriteHandler = () => {
    setUnFavorite(!unFavorite);

    setRemoveList((prev) => [...prev, id]);
  };

  useEffect(() => {
    if (!edit) {
      removeList.map((item) => dispatch(removeFromFavorites(item)));
    }
  }, [dispatch, edit, removeList]);

  return (
    <div
      className={`relative pb-8 leading-relaxed ${unFavorite && 'opacity-70'}`}
    >
      <Link to={`/shop/${productData?.slug.current}/?id=${id}`}>
        <SanityImage
          imageRef={productData?.gallery.images[0].asset._ref}
          className="object-cover w-full h-[50vw] md:h-[31vw] pb-4"
        />
      </Link>

      <div className="flex justify-between">
        <Link to={`/shop/${productData?.slug.current}/?id=${id}`}>
          <h3 className="text-sm md:text-base">{productData?.title}</h3>
        </Link>
        <p className="hidden ml-auto md:block">
          ${productData?.price.toFixed(2)}
        </p>
      </div>

      <p className="">
        {productData?.categories.map((category, i) => (
          <span
            key={i}
            className="text-sm font-light text-gray-500 md:text-base"
          >
            {category}{' '}
          </span>
        ))}
      </p>
      <p className="block ml-auto md:hidden">
        ${productData?.price.toFixed(2)}
      </p>

      <button
        onClick={addToBagHandler}
        className="px-5 py-2 mt-6 border border-gray-400 rounded-3xl"
      >
        {size ? 'Add to Bag' : 'Select Size'}
      </button>

      {edit && (
        <img
          src={edit && unFavorite ? HeartIcon : HeartFilledIcon}
          alt=""
          onClick={removeFavoriteHandler}
          className="absolute p-1.5 w-8 md:w-10 h-8 md:h-10 bg-white rounded-full top-3 md:top-5 right-3 md:right-5 cursor-pointer"
        />
      )}
    </div>
  );
};
