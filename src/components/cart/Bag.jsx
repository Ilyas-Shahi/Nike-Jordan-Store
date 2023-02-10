import SanityImage from '../layout/SanityImage';

import ChevronDown from '../../assets/svg/chevron-down.svg';
import HeartIcon from '../../assets/svg/heart-icon.svg';
import DeleteIcon from '../../assets/svg/delete-icon.svg';

const Bag = ({ productData }) => {
  return (
    <>
      <div className="w-4/6 pb-6 border-b border-gray-300 h-max">
        <h1 className="mb-8 text-2xl">Bag</h1>

        <div className="flex justify-between gap-8 pb-6 leading-relaxed">
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
            <p className="font-light text-gray-500">White/Siren Red/Black</p>

            <form className="flex gap-4">
              <div className="flex">
                <label htmlFor="size" className="font-light text-gray-500">
                  Size
                </label>
                <select
                  name="Size"
                  id="size"
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
