/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';

import useFetch from '../hooks/useFetch';
import SanityImage from '../components/layout/SanityImage';

import HeartIcon from '../assets/svg/heart-icon.svg';
import HeartFilledIcon from '../assets/svg/heart-filled.svg';

// let dummyFavorites = [
//   '8110b3d1-e302-4b30-91e2-f6d8f51ef8a9',
//   '8110b3d1-e302-4b30-91e2-f6d8f51ef8a9',
// ];

const Favorites = () => {
  const [edit, setEdit] = useState(false);
  const [dummyFavorites, setDummyFavorites] = useState([
    '8110b3d1-e302-4b30-91e2-f6d8f51ef8a9',
    '8110b3d1-e302-4b30-91e2-f6d8f51ef8a9',
  ]);

  const removeFavorite = (index, unFavorite) => {
    if (!edit && unFavorite) {
      setDummyFavorites(dummyFavorites.splice(1, index));
    }
    console.log(dummyFavorites);
  };

  return (
    <>
      <div className="flex justify-between p-12">
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

      <div className="grid grid-cols-3 gap-8 p-12">
        {dummyFavorites.map((id, index) => (
          <FavoriteItem
            key={index}
            id={id}
            edit={edit}
            index={index}
            removeFavorite={removeFavorite}
          />
        ))}
      </div>
    </>
  );
};
export default Favorites;

// A Card component to render each favorite item
const FavoriteItem = ({ id, edit, index, removeFavorite }) => {
  const [unFavorite, setUnFavorite] = useState(false);

  const productData = useFetch(`*[_id == '${id}']`)[0]?.result[0];

  return (
    <div
      className={`relative pb-8 leading-relaxed ${unFavorite && 'opacity-70'}`}
    >
      <SanityImage
        imageRef={productData?.gallery.images[0].asset._ref}
        className="object-cover w-full h-[31vw] pb-4"
      />

      <div className="flex justify-between">
        <h3 className="">{productData?.title}</h3>
        <p className="ml-auto">${productData?.price.toFixed(2)}</p>
      </div>

      <p className="">
        {productData?.categories.map((category, i) => (
          <span key={i} className="font-light text-gray-500">
            {category}{' '}
          </span>
        ))}
      </p>

      <button className="px-5 py-2 mt-6 border border-gray-400 rounded-3xl">
        Add to Bag
      </button>

      {edit && (
        <img
          src={edit && unFavorite ? HeartIcon : HeartFilledIcon}
          alt=""
          onClick={() => {
            setUnFavorite(!unFavorite);
            removeFavorite(index, unFavorite);
          }}
          className="absolute p-1.5 w-10 h-10 bg-white rounded-full top-5 right-5 cursor-pointer"
        />
      )}
    </div>
  );
};
