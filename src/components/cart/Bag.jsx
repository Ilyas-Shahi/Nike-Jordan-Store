import useFetch from '../../hooks/useFetch';

import SanityImage from '../layout/SanityImage';
import ChevronDown from '../../assets/svg/chevron-down.svg';
import HeartIcon from '../../assets/svg/heart-icon.svg';
import DeleteIcon from '../../assets/svg/delete-icon.svg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Bag = ({ id, size, getTotal, index }) => {
  const productData = useFetch(`*[_id == '${id}']`)[0]?.result[0];

  const [sizeValue, setSizeValue] = useState(size);

  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setTotal(productData?.price * +quantity);
    getTotal(total, index);
  }, [productData?.price, quantity, getTotal, total, index]);

  return (
    <>
      <div className="pb-6 mb-6 border-b">
        <div className="flex justify-between gap-8 pb-6 leading-relaxed border-gray-300">
          <Link to={`/shop/${productData?.slug.current}/?id=${id}`}>
            <SanityImage
              imageRef={productData?.gallery.images[0].asset._ref}
              className="object-cover w-40 h-40"
            />
          </Link>

          <div>
            <Link to={`/shop/${productData?.slug.current}/?id=${id}`}>
              <h3 className="">{productData?.title}</h3>
            </Link>
            <p className="">
              {productData?.categories.map((category, i) => (
                <span key={i} className="font-light text-gray-500">
                  {category}{' '}
                </span>
              ))}
            </p>
            <p className="font-light text-gray-500">White/Siren Red/Black</p>

            <form className="flex gap-4">
              <div className="flex">
                <label htmlFor="size" className="font-light text-gray-500">
                  Size
                </label>
                <select
                  name="Size"
                  id="size"
                  value={sizeValue}
                  onChange={(e) => setSizeValue(e.target.value)}
                  style={{ backgroundImage: `url('${ChevronDown}')` }}
                  className="px-3 py-0 text-sm appearance-none bg-right bg-[size:12px] bg-opacity-10 bg-no-repeat opacity-70 font-light"
                >
                  {productData?.size.map((option, i) => (
                    <option key={i} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex">
                <label htmlFor="size" className="font-light text-gray-500">
                  Quantity
                </label>
                <select
                  name="Size"
                  id="size"
                  style={{ backgroundImage: `url('${ChevronDown}')` }}
                  className="px-5 py-0 text-sm appearance-none bg-right bg-[size:12px] bg-opacity-10 bg-no-repeat opacity-70 font-light"
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(10)].map((v, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </form>

            <div className="flex gap-4 mt-8">
              <img src={HeartIcon} alt="" />
              <img src={DeleteIcon} alt="" />
            </div>
          </div>

          <p className="ml-auto">${productData?.price.toFixed(2)}</p>
        </div>

        <p>Free Shipping</p>
        <p>
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

        <p className="mt-10">Free Pickup</p>
        <p className="pb-1 border-b border-gray-800 w-max">Find a Store</p>
      </div>
    </>
  );
};
export default Bag;
