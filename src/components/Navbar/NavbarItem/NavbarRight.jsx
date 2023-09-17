import { CiSearch } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useEffect, useState } from "react";
import { getCartTotal } from "../../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import BasketModal from "../../BasketModal";
import { useLocation } from "react-router-dom";

const NavbarRight = () => {
  const dispatch = useDispatch();
  const [basketModal, setBasketModal] = useState(false);
  const location = useLocation();
  const { carts, itemCount } = useSelector((store) => store.carts);


  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, location ]);

  return (
    <div className="right flex items-center">
      <div className="flex items-center gap-5">
        <div className="flex items-center rounded-full gap-1 ">
          <CiSearch size={28} className="text-white hover:text-red-400" />
          <input
            className="outline-none bg-transparent placeholder:border-bottom-color-white border-b-2 pb-1 hidden md:block hover:border-b-red-400 placeholder:hover:text-red-400"
            type="text"
            placeholder="Search products..."
          />
        </div>
        <div className="flex gap-1 items-center  cursor-pointer  hover:text-red-400">
          <AiOutlineHeart size={28} />
          <p>Favorites</p>
        </div>
        <div
          className="flex items-center gap-1 cursor-pointer focus:shadow-white hover:text-red-400"
          onClick={() => setBasketModal(true)}
        >
          <SlBasket size={28} />
          <p>Shopping bag ({carts?.length})</p>
        </div>
        {basketModal && (
          <BasketModal setBasketModal={setBasketModal} carts={carts} />
        )}
      </div>
    </div>
  );
};

export default NavbarRight;
