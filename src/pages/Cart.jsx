import Bag from '../components/cart/Bag';
import Summary from '../components/cart/Summary';

const Cart = () => {
  return (
    <div className="flex p-40">
      <Bag />
      <Summary />
    </div>
  );
};
export default Cart;
