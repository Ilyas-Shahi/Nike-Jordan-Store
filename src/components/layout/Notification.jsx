import useFetch from '../../hooks/useFetch';

import CheckMarkIcon from '../../assets/svg/checkmark.svg';
import CrossIcon from '../../assets/svg/cross-icon.svg';
import SanityImage from './SanityImage';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeNotification } from '../../redux-store/notificationSlice';

const Notification = () => {
  const notificationContent = useSelector(
    (state) => state.notification.notificationContent
  );
  const productData = useFetch(`*[_id == '${notificationContent.id}']`)[0]
    ?.result[0];
  const cartItemsNum = useSelector((state) => state.cart.cartItems)?.length;
  const notificationType = useSelector(
    (state) => state.notification.notificationType
  );

  const dispatch = useDispatch();

  // setTimeout(() => {
  //   dispatch(closeNotification());
  // }, 6000);

  console.log(notificationContent);

  return (
    <div className="fixed z-50 w-full h-full">
      <div className="absolute z-10 w-full h-full bg-black bg-opacity-70"></div>

      <div className="absolute z-40 p-6 bg-white w-[440px] right-6">
        <div className="flex justify-between">
          <p>
            <img
              src={CheckMarkIcon}
              alt=""
              className="inline-block w-3 h-3 mb-1 mr-2 bg-green-600 rounded-full"
            />
            Added to {notificationType == 'Cart' && 'Bag'}
          </p>
          <button onClick={() => dispatch(closeNotification())}>
            <img src={CrossIcon} alt="" className="w-5 h-5" />
          </button>
        </div>

        <div className="flex gap-4 mt-6">
          <SanityImage
            imageRef={productData?.gallery.images[0].asset._ref}
            className="object-cover w-24 h-24"
          />

          <div className="leading-relaxed">
            <p>{productData?.title}</p>
            <p className="">
              {productData?.categories.map((category, i) => (
                <span key={i} className="font-light text-gray-500">
                  {category}{' '}
                </span>
              ))}
            </p>
            <p className="font-light text-gray-500">
              Size {notificationContent.size}
            </p>
            <p>${productData?.price}</p>
          </div>
        </div>

        {notificationType == 'Cart' && (
          <div className="flex gap-4 mt-6">
            <Link to="/cart" className="w-full">
              <button className="w-full p-4 border border-gray-400 rounded-full hover:border-gray-500">
                View Bag ({cartItemsNum})
              </button>
            </Link>
            <Link to="/cart" className="w-full">
              <button className="w-full p-4 text-white bg-black border border-black rounded-full hover:bg-opacity-70">
                Checkout
              </button>
            </Link>
          </div>
        )}

        {notificationType == 'Favorite' && (
          <div className="flex gap-4 mt-6">
            <Link to="/favorites" className="w-full">
              <button className="w-full p-4 text-white bg-black border border-black rounded-full hover:bg-opacity-70">
                View Favorites
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Notification;
