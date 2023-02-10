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

  return (
    <>
      <div className="flex p-12 leading-relaxed pb-40">
        <div className="grid w-2/3 grid-cols-2 gap-3 pl-12 pr-6">
          {productData?.gallery.images.map((image, index) => (
            <SanityImage key={index} imageRef={image.asset._ref} />
          ))}
        </div>

        <div className="w-1/3 px-12">
          {productData?.specialty && (
            <p className="mb-1 font-light text-amber-800">
              {productData?.specialty}
            </p>
          )}

          <h2 className="text-3xl">{productData?.title}</h2>

          <p className="text-base">
            {productData?.categories.map((category, i) => (
              <span key={i} className="text-gray-900">
                {category}{' '}
              </span>
            ))}
          </p>

          <p className="mt-4 mb-10 text-lg font-light">${productData?.price}</p>

          <p className="flex justify-between mb-2">
            <span>Select Size</span>
            <span>Size Guide</span>
          </p>

          <form
            className="grid grid-cols-2 gap-1"
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
                  className="flex items-center justify-center w-full h-12 border border-gray-200 rounded-md cursor-pointer hover:border-gray-900 group-border-gray-900 peer-checked:border-gray-900"
                >
                  {size}
                </label>
              </div>
            ))}
          </form>

          <p className="w-3/4 mx-auto mt-6 mb-4 text-base text-center">
            4 interest-free payments of ${(productData?.price / 4).toFixed(2)}{' '}
            with <img src={KlarnaLogo} alt="" className="inline w-12" />{' '}
            <span className="underline">Learn More</span>
          </p>

          <button className="w-full p-5 mb-3 text-white bg-black hover:bg-gray-800 rounded-full">
            Add to Bag
          </button>
          <button className="w-full p-5 mb-12 border border-gray-300 hover:border-gray-500 rounded-full">
            Favorite <img src={HeartIcon} alt="" className="inline w-4 ml-2" />
          </button>

          <p>
            Shipping* <br />
            To get accurate shipping information{' '}
            <span className="border-b border-gray-800 pb-1.5">
              Edit Location
            </span>
          </p>

          <p className="mt-6">Free Pickup</p>
          <p className="border-b inline border-gray-800 pb-1.5">Find a Store</p>
          <p className="text-sm mb-12 mt-5 text-gray-600">
            *Faster Shipping option may be available
          </p>

          <p className="mb-10">{productData?.description}</p>

          <ShippingReturns />

          <Reviews />
        </div>
      </div>
    </>
  );
};
export default SingleProduct;
