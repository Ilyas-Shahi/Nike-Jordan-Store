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
        <Link to="#" className="h-1/2 w-full">
          <div
            style={{ backgroundImage: `url(${ClothingImg})` }}
            className="h-[1000px] w-full  bg-no-repeat flex items-end bg-cover bg-center p-12"
          >
            <div>
              <h4 className="mb-6 text-xl font-extrabold">CLOTHING</h4>
              <ButtonPrimary>Shop</ButtonPrimary>
            </div>
          </div>
        </Link>

        <div className="flex flex-col w-full gap-3">
          <Link to="#" className="h-1/2 w-full">
            <div
              style={{ backgroundImage: `url(${ShoesImg})` }}
              className="flex items-end w-full p-12 bg-center bg-no-repeat bg-cover h-full"
            >
              <div>
                <h4 className="mb-6 text-xl font-extrabold">SHOES</h4>
                <ButtonPrimary>Shop</ButtonPrimary>
              </div>
            </div>
          </Link>

          <Link to="#" className="h-1/2 w-full">
            <div
              style={{ backgroundImage: `url(${AccessoriesImg})` }}
              className="flex items-end w-full p-12 bg-center bg-no-repeat bg-cover h-full"
            >
              <div>
                <h4 className="mb-6 text-xl font-extrabold">ACCESSORIES</h4>
                <ButtonPrimary>Shop</ButtonPrimary>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ShopJordanIcons;
