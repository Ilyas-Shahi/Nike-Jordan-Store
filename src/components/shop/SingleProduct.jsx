import useFetch from '../../hooks/useFetch';
import SanityImage from '../layout/SanityImage';

import KlarnaLogo from '../../assets/svg/klarna-logo-black.svg';
import HeartIcon from '../../assets/svg/heart-icon.svg';
import ShippingReturns from './ShippingReturns';
import Reviews from './Reviews';

const SingleProduct = () => {
  const productData = useFetch(
    "*[_id == '8110b3d1-e302-4b30-91e2-f6d8f51ef8a9']"
  )[0]?.result[0];

  console.log(productData);

  return (
    <>
      <div className="flex p-12">
        <div className="grid w-3/4 grid-cols-2 gap-3 px-12">
          {productData?.gallery.images.map((image, index) => (
            <SanityImage key={index} imageRef={image.asset._ref} />
          ))}
        </div>

        <div className="w-1/4">
          <h2 className="text-3xl">{productData?.title}</h2>

          <p className="text-base">
            {productData?.categories.map((category, i) => (
              <span key={i}>{category} </span>
            ))}
          </p>

          <p className="text-lg">${productData?.price}</p>

          <p className="flex justify-between">
            <span>Select Size</span>
            <span>Size Guide</span>
          </p>

          <form
            className="grid grid-cols-2 gap-2"
            onChange={(e) => console.log(e.target.value)}
          >
            {productData?.size.map((size, i) => (
              <div key={i} className="relative">
                <input
                  type="radio"
                  name="size"
                  value={size}
                  id={`size${i}`}
                  className="absolute w-0 h-0 appearance-none peer"
                />
                <label
                  htmlFor={`size${i}`}
                  className="flex items-center justify-center w-full h-12 border border-gray-200 hover:border-gray-900 group-border-gray-900 rounded-md cursor-pointer peer-checked:border-gray-900"
                >
                  {size}
                </label>
              </div>
            ))}
          </form>

          <p className="text-base">
            4 interest-free payments of ${(productData?.price / 4).toFixed(2)}{' '}
            with <img src={KlarnaLogo} alt="" className="inline w-12" />{' '}
            <span className="underline">Learn More</span>
          </p>

          <button className="bg-black text-white p-5 my-2 rounded-full w-full">
            Add to Bag
          </button>
          <button className="border border-gray-300 p-5 my-2 rounded-full w-full">
            Favorite <img src={HeartIcon} alt="" className="inline w-4 ml-2" />
          </button>

          <p>
            Shipping* <br />
            To get accurate shipping information{' '}
            <span className="border-b border-gray-800">Edit Location</span>
          </p>

          <p>Free Pickup</p>
          <p>Find a Store</p>
          <p className="text-sm">*Faster Shipping option may be available</p>

          <p>{productData?.description}</p>

          <ShippingReturns />

          <Reviews />
        </div>
      </div>
    </>
  );
};
export default SingleProduct;
