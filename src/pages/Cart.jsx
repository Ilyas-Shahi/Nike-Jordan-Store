import Bag from '../components/cart/Bag';
import Favorites from '../components/cart/Favorites';
import Summary from '../components/cart/Summary';
import useFetch from '../hooks/useFetch';

const Cart = () => {
  const productData = useFetch(
    "*[_id == '8110b3d1-e302-4b30-91e2-f6d8f51ef8a9']"
  )[0]?.result[0];

  return (
    <div className="max-w-[1180px]  p-12 mx-auto">
      <div className="flex gap-6">
        <Bag productData={productData} />
        <Summary />
      </div>

      <Favorites productData={productData} />
    </div>
  );
};
export default Cart;
