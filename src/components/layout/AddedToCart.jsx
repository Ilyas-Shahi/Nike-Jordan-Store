import CheckMarkIcon from '../../assets/svg/checkmark.svg';
import CrossIcon from '../../assets/svg/cross-icon.svg';

const AddedToCart = () => {
  return (
    <>
      <div className="absolute z-10 w-screen h-screen bg-black bg-opacity-50"></div>

      <div className="absolute z-40 w-1/4 bg-white h-52 right-8 p-4">
        <div className="flex justify-between">
          <p>
            <img
              src={CheckMarkIcon}
              alt=""
              className="bg-green-700 rounded-full p-0.5 h-4 w-4 inline-block mr-2 mb-1"
            />
            Added to Bag
          </p>

          <img src={CrossIcon} alt="" className="w-5 h-5" />
        </div>
      </div>
    </>
  );
};
export default AddedToCart;
