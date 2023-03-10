import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from '../../redux-store/favoritesSlice';
import { removeFromCart, updateCart } from '../../redux-store/cartSlice';

import useFetch from '../../hooks/useFetch';

import SanityImage from '../layout/SanityImage';
import ChevronDown from '../../assets/svg/chevron-down.svg';
import HeartIcon from '../../assets/svg/heart-icon.svg';
import DeleteIcon from '../../assets/svg/delete-icon.svg';

const Bag = ({ id, size, getTotal, index }) => {
  const productData = useFetch(`*[_id == '${id}']`)[0]?.result[0];
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [sizeValue, setSizeValue] = useState(size);

  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(
    cartItems[index].quantity ? cartItems[index].quantity : 1
  );

  const dispatch = useDispatch();

  const updateSize = (e) => {
    setSizeValue(e.target.value);
    dispatch(
      updateCart({
        index,
        updated: { id, size: e.target.value, quantity },
      })
    );
  };

  const updateQuantity = (e) => {
    setQuantity(e.target.value);
    dispatch(
      updateCart({
        index,
        updated: { id, size: sizeValue, quantity: e.target.value },
      })
    );
  };

  useEffect(() => {
    setTotal(productData?.price * +quantity);
    getTotal(total, index);
  }, [productData?.price, quantity, getTotal, total, index]);

  return (
    <>
      <div className="pb-6 mb-6 border-b">
        <div className="flex justify-between gap-3 pb-6  md:leading-relaxed border-gray-300 md:gap-8">
          <Link to={`/shop/${productData?.slug.current}/?id=${id}`}>
            <SanityImage
              imageRef={productData?.gallery.images[0].asset._ref}
              className="object-cover w-24 h-24 md:w-40 md:h-40"
            />
          </Link>

          <div>
            <Link to={`/shop/${productData?.slug.current}/?id=${id}`}>
              <h3 className="text-sm md:text-base">{productData?.title}</h3>
            </Link>
            <p>
              {productData?.categories.map((category, i) => (
                <span
                  key={i}
                  className="text-sm font-light text-gray-500 md:text-base"
                >
                  {category}{' '}
                </span>
              ))}
            </p>
            <p>
              {productData?.color.map((color, i) => (
                <span
                  key={i}
                  className="text-sm font-light text-gray-500 md:text-base"
                >
                  {color.charAt(0).toUpperCase() + color.slice(1)}{' '}
                </span>
              ))}
            </p>

            <form className="flex gap-1 md:gap-4">
              <div className="flex">
                <label
                  htmlFor="size"
                  className="text-sm font-light text-gray-500 md:text-base"
                >
                  Size
                </label>
                <select
                  name="Size"
                  id="size"
                  value={sizeValue}
                  onChange={updateSize}
                  style={{ backgroundImage: `url('${ChevronDown}')` }}
                  className="px-2 md:px-3 py-0 text-sm appearance-none bg-right bg-[size:12px] bg-white bg-opacity-10 bg-no-repeat opacity-70 font-light"
                >
                  {productData?.size.map((option, i) => (
                    <option key={i} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex">
                <label
                  htmlFor="size"
                  className="text-sm font-light text-gray-500 md:text-base"
                >
                  Quantity
                </label>
                <select
                  name="Quantity"
                  id="quantity"
                  style={{ backgroundImage: `url('${ChevronDown}')` }}
                  className="px-2 bg-white md:px-5 py-0 text-sm appearance-none bg-right bg-[size:12px] bg-opacity-10 bg-no-repeat opacity-70 font-light"
                  value={quantity}
                  onChange={updateQuantity}
                >
                  {[...Array(10)].map((v, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </form>

            <div className="flex gap-4 mt-4 md:mt-8">
              <button
                onClick={() => {
                  dispatch(addToFavorites({ id, size }));

                  dispatch(removeFromCart(id));
                }}
              >
                <img src={HeartIcon} alt="" />
              </button>
              <button onClick={() => dispatch(removeFromCart(id))}>
                <img src={DeleteIcon} alt="" />
              </button>
            </div>
          </div>

          <p className="ml-auto">${productData?.price.toFixed(2)}</p>
        </div>

        <p className="text-sm md:tex-base">Free Shipping</p>
        <p className="text-sm md:tex-base">
          Arrive by{' '}
          {new Date(
            new Date().getTime() + 7 * 24 * 60 * 60 * 1000
          ).toLocaleString(('en', 'US'), {
            month: 'short',
            weekday: 'long',
            day: '2-digit',
          })}{' '}
          <span className="pb-1 border-b border-gray-800">Edit Location</span>
        </p>

        <p className="mt-6 text-sm md:tex-base md:mt-10">Free Pickup</p>
        <p className="pb-1 border-b text-sm md:tex-base border-gray-800 w-max">
          Find a Store
        </p>
      </div>
    </>
  );
};
export default Bag;
