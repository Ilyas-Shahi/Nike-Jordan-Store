import { Link } from 'react-router-dom';
import ButtonPrimary from '../layout/ButtonPrimary';

import ClothingImg from '../../assets/clothing.jpg';
import ShoesImg from '../../assets/shoes.jpg';
import AccessoriesImg from '../../assets/accessories.jpg';

const ShopJordanIcons = () => {
  return (
    <div className="p-12">
      <h3 className="mb-6 text-2xl font-extrabold">SHOP JORDAN ICONS</h3>

      <div className="flex gap-3">
        <Link to="/shop" className="w-full relative">
          <div className="absolute z-10 bottom-12 left-12">
            <h4 className="mb-6 text-xl font-extrabold">CLOTHING</h4>
            <ButtonPrimary>Shop</ButtonPrimary>
          </div>

          <img src={ClothingImg} alt="" className="w-full" />
        </Link>

        <div className="flex flex-col w-full justify-between">
          <Link to="/shop" className="w-full relative">
            <div className="absolute z-10 bottom-12 left-12">
              <h4 className="mb-6 text-xl font-extrabold">SHOES</h4>
              <ButtonPrimary>Shop</ButtonPrimary>
            </div>

            <img src={ShoesImg} alt="" className="w-full" />
          </Link>

          <Link to="/shop" className="w-full relative">
            <div className="absolute z-10 bottom-12 left-12">
              <h4 className="mb-6 text-xl font-extrabold">ACCESSORIES</h4>
              <ButtonPrimary>Shop</ButtonPrimary>
            </div>

            <img src={AccessoriesImg} alt="" className="w-full" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ShopJordanIcons;
