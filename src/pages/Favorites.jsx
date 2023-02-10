import SanityImage from '../components/layout/SanityImage';
import useFetch from '../hooks/useFetch';

const dummyFavorites = [
  '8110b3d1-e302-4b30-91e2-f6d8f51ef8a9',
  '8110b3d1-e302-4b30-91e2-f6d8f51ef8a9',
];

const Favorites = () => {
  return (
    <>
      <div className="flex justify-between p-12">
        <h2 className="text-2xl">Favorites</h2>
        <button className="px-5 py-2 border rounded-full">Edit</button>
      </div>

      <div className="grid grid-cols-3 gap-8 p-12">
        {dummyFavorites.map((id, index) => (
          <FavoriteItem key={index} id={id} />
        ))}
      </div>
    </>
  );
};
export default Favorites;

// A Card component to render each favorite item
const FavoriteItem = ({ id }) => {
  const productData = useFetch(`*[_id == '${id}']`)[0]?.result[0];

  return (
    <div className="pb-8 leading-relaxed">
      <SanityImage
        imageRef={productData?.gallery.images[0].asset._ref}
        className="object-cover w-full h-[30vw] pb-4"
      />

      <div>
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
      </div>
    </div>
  );
};
