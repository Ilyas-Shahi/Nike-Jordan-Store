import { useState } from 'react';

import ChevronDown from '../../assets/svg/chevron-down.svg';
import QuestionIcon from '../../assets/svg/question-mark.svg';
import PayPalLogo from '../../assets/svg/paypal-logo.svg';

const Summary = () => {
  const [showPromo, setShowPromo] = useState(false);

  return (
    <>
      <div className="w-2/6 leading-loose">
        <h1 className="mb-8 text-2xl">Summary</h1>

        <div className="">
          <button
            onClick={() => setShowPromo(!showPromo)}
            className="flex justify-between w-full"
          >
            <span>Do you have Promo Code?</span>

            <img
              src={ChevronDown}
              alt=""
              className={`w-4 mt-1 transition-all ${showPromo && 'rotate-180'}`}
            />
          </button>

          <form
            onSubmit={(e) => e.preventDefault()}
            className={`overflow-hidden pb-6 ${
              showPromo ? 'animate-heightEntrance' : 'hidden'
            }`}
          >
            <div className="flex items-center gap-3">
              <input
                type="text"
                name="promo"
                id="promo"
                className="w-4/6 px-3 py-2 border border-gray-300 rounded-lg h-full"
              />

              <button
                type="submit"
                className="w-2/6 px-2 py-2 border border-gray-300 rounded-3xl"
              >
                Apply
              </button>
            </div>
          </form>
        </div>

        <div className="flex justify-between">
          <p className="flex gap-2">
            <span>Subtotal</span>
            <img src={QuestionIcon} alt="" className="w-3" />
          </p>
          <p>$175.00</p>
        </div>

        <div className="flex justify-between">
          <p>Estimated Shipping & Handling</p>
          <p>Free</p>
        </div>

        <div className="flex justify-between">
          <p className="flex gap-2">
            <span>Estimated Tax</span>
            <img src={QuestionIcon} alt="" className="w-3" />
          </p>
          <p>--</p>
        </div>

        <div className="flex justify-between py-5 border-t border-b border-gray-300 mt-5">
          <p>Total</p>
          <p>$175.00</p>
        </div>

        <button className="w-full p-5 mt-8 text-white transition-all bg-black rounded-full cursor-pointer hover:bg-gray-800">
          Checkout
        </button>

        <button className="w-full p-1 mt-3 text-center transition-all border border-gray-200 rounded-full cursor-pointer bg-gray-50 hover:bg-white">
          <img
            src={PayPalLogo}
            alt=""
            className="object-cover w-20 h-12 mx-auto"
          />
        </button>
      </div>
    </>
  );
};
export default Summary;
