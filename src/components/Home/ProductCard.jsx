import Detail from "./Detail";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../redux/actions/productAction";
import { AiOutlineHeart } from "react-icons/ai";
import { addToCart } from "../../redux/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { productDetail } = useSelector((store) => store.products);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    dispatch(getProductDetail(product?.defaultArticle?.code));
  };

  const addBasket = () => {
    try {
      dispatch(
        addToCart({
          id: product?.defaultArticle?.code,
          title: product?.name,
          img: product?.galleryImages[0]?.baseUrl,
          price: product?.price.value,
          quantity: 1,
        })
      );
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  console.log("pro", product);
  console.log("det", productDetail);
  return (
    <div className=" bg-white rounded-lg shadow ">
      <a
        href={`https://www2.hm.com/${product.linkPdp}`}
   
        className="relative"
      >
        <img
          className="p-2 rounded-lg efect border-none"
          src={product?.images[0]?.baseUrl}
          alt="product image"
        />
        <div className="absolute bottom-0 right-0 mb-2 me-2 w-12 h-12 rounded-full cursor-pointer hover:text-red-400">
          {" "}
          <AiOutlineHeart size={34} />
        </div>
      </a>
      <div className="px-5 pb-5">
        <h4 className="h-16 text-xl tracking-tight  text-center mt-3 text-gray-900">
          {product?.name}
        </h4>
        <div className="flex items-center justify-between mt-3">
          <span className="text-2xl font-medium text-gray-900 dark:text-white">
            ${product?.price.value}
          </span>
          <div
            className=" w-12 h-12 rounded-full"
            style={{ backgroundColor: product?.rgbColors }}
          ></div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <button
            onClick={addBasket}
            className="text-white bg-red-400 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Add to cart
          </button>
          <button
            onClick={() => handleClick(product?.defaultArticle?.code)}
            className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Detail
          </button>
        </div>
      </div>
      {open && (
        <Detail
          setOpen={setOpen}
          productDetail={productDetail}
          img={product.images[0].baseUrl}
        />
      )}
    </div>
  );
};

export default ProductCard;
