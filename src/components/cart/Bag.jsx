import useFetch from '../../hooks/useFetch';
import SanityImage from '../layout/SanityImage';

import ShoeImg from '../../assets/air-jordan-1-mid-se.png';
import HeartIcon from '../../assets/svg/heart-icon.svg';
import DeleteIcon from '../../assets/svg/delete-icon.svg';

const Bag = () => {
  const productData = useFetch(
    "*[_id == '8110b3d1-e302-4b30-91e2-f6d8f51ef8a9']"
  )[0]?.result[0];

  console.log(productData);

  let today = new Date();

  const nextWeak = new Date(
    new Date().getTime() + 7 * 24 * 60 * 60 * 1000
  ).toISOString();

  console.log(nextWeak);
  return (
    <>
      <div className="w-full">
        <h1 className="mb-10 text-2xl">Bag</h1>

        <div className="flex gap-8">
          <SanityImage
            imageRef={productData?.gallery.images[0].asset._ref}
            className="object-cover w-40 h-40"
          />

          <div>
            <h3 className="text-lg">{productData?.title}</h3>
            <p className="text-base">
              {productData?.categories.map((category, i) => (
                <span key={i} className="text-gray-900">
                  {category}{' '}
                </span>
              ))}
            </p>
            <p className="text-gray-600">White/Siren Red/Black</p>

            <form>
              <div className="flex">
                <label htmlFor="size">Size</label>
                <select
                  name="Size"
                  id="size"
                  className="px-3 py-0 text-base appearance-none"
                >
                  {productData?.size.map((option, i) => (
                    <option key={i} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </form>

            <div className="flex gap-4 mt-4">
              <img src={HeartIcon} alt="" />
              <img src={DeleteIcon} alt="" />
            </div>
          </div>
        </div>

        <p>Free Shipping</p>
        <p>Arrive by</p>
      </div>
    </>
  );
};
export default Bag;
