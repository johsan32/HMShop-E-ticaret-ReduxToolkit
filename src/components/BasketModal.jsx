import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartTotal,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/cartSlice";
import { AiOutlineDelete, AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";

const BasketModal = ({ setBasketModal }) => {
  const { carts, itemCount, totalAmount } = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  console.log(totalAmount, itemCount);
  useEffect(() => {
    dispatch(getCartTotal());
  }, []);

  console.log(carts);
  return (
    <>
      <div className="fixed flex justify-end items-start mt-10 top-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0  max-h-full">
        <div className="relative top-0 flex max-h-full text-black">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-[600px]">
            <button
              onClick={() => setBasketModal(false)}
              type="button"
              className="p-1 ml-auto border-0 float-right text-4xl font-bolder focus:outline-none "
            >
              <span className="bg-transparent text-black h-6 w-6 text-4xl block outline-none hover:text-red-400 focus:outline-none">
                ×
              </span>
            </button>

            <div className="px-6 py-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-base font-semibold text-gray-900 lg:text-xl">
                Shopping Bag
              </h3>
            </div>

            <div className="p-6">
              {carts.length === 0 ? (
                <div className="text-red-600">Your shopping bag is empty</div>
              ) : (
                <ul className="my-4 space-y-3">
                  {carts?.map((cart) => (
                    <li
                      key={cart.id}
                      className="flex items-center justify-between gap-5"
                    >
                      <img
                        src={cart?.img}
                        className=" object-cover w-[60px] text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 "
                      />
                      <span className="flex-1 ml-3 whitespace-wrap text-red-950">
                        {cart.title}
                      </span>
                      <span className="text-black">{cart.price.toFixed(2)}</span>
                      <div className="flex gap-2">
                        <span
                          onClick={() => dispatch(decrementQuantity(cart))}
                          className="button cursor-pointer"
                        >
                          <AiOutlineMinusCircle className="text-2xl text-yellow-600" />
                        </span>
                        <span>{cart.quantity}</span>
                        <span
                          onClick={() => dispatch(incrementQuantity(cart))}
                          className="button cursor-pointer"
                        >
                          <AiOutlinePlusCircle className="text-2xl text-green-600" />
                        </span>
                      </div>
                      <button
                        onClick={() => dispatch(removeFromCart(cart.id))}
                        className="text-red-500 p-2  text-3xl"
                      >
                        <AiOutlineDelete />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="flex items-center justify-end pe-5">
              {carts.length !== 0 ? (
                      <p className="text-2xl text-gray-600">
                Total:{" "}
                <span className=" text-3xl text-indigo-950">
                  {totalAmount.toFixed(2)}$
                </span>
              </p>
              ): (
                ""
              )}
          
            </div>
            <div className="p-2 items-center flex">
              <a
                href="#"
                className="inline-flex items-center text-xs font-normal text-red-500 hover:underline dark:text-gray-400"
              >
                Please enter your username and password and click Login.
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketModal;
