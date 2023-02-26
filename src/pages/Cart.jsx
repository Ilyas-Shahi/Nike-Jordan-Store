import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Bag from '../components/cart/Bag';
import FavoritesSection from '../components/cart/FavoritesSection';
import Summary from '../components/cart/Summary';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [total, setTotal] = useState(0);
  const bagTotals = [];
  const getTotal = (amount, index) => {
    bagTotals.splice(index, 1, amount);

    setTotal(bagTotals.reduce((a, c) => a + c));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-[1180px] p-4 md:p-12 mx-auto">
      <div className="gap-6 md:flex">
        <div className="w-full py-6 md:w-4/6 h-max">
          <h1 className="text-xl text-center md:mb-8 md:text-left md:text-2xl">
            Bag
          </h1>
          <div className="flex items-center justify-center pb-10 mb-6 border-b md:hidden">
            <p className="text-gray-500 ">{cartItems.length} Items</p>
            <div className="w-px h-4 mx-2 bg-gray-400"></div>
            <p className="">${total.toFixed(2)}</p>
          </div>

          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <Bag
                key={index}
                index={index}
                id={item.id}
                size={item.size}
                getTotal={getTotal}
              />
            ))
          ) : (
            <p>There are no items in your bag.</p>
          )}
        </div>

        <Summary total={total} />
      </div>

      <FavoritesSection />
    </div>
  );
};
export default Cart;
