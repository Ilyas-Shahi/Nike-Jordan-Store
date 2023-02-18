import { useState } from 'react';
import { useSelector } from 'react-redux';

import Bag from '../components/cart/Bag';
import FavoritesSection from '../components/cart/FavoritesSection';
import Summary from '../components/cart/Summary';

const Cart = () => {
  const cartItems = useSelector((state) => state.addToCart.cartItems);

  const [total, setTotal] = useState(0);
  const bagTotals = [];
  const getTotal = (amount, index) => {
    bagTotals.splice(index, 1, amount);

    setTotal(bagTotals.reduce((a, c) => a + c));
  };

  return (
    <div className="max-w-[1180px]  p-12 mx-auto">
      <div className="flex gap-6">
        <div className="w-4/6 pb-6 h-max">
          <h1 className="mb-8 text-2xl">Bag</h1>

          {cartItems.map((item, index) => (
            <Bag
              key={index}
              index={index}
              id={item.id}
              size={item.size}
              getTotal={getTotal}
            />
          ))}
        </div>

        <Summary total={total} />
      </div>

      <FavoritesSection />
    </div>
  );
};
export default Cart;
