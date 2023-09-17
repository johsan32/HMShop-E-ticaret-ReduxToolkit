import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ModalBody = ({ productDetail, img }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const increment = () => {
    setQuantity(quantity + 1);
  };
  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.code,
        title: productDetail?.name,
        img: productDetail?.articlesList[0]?.galleryDetails[0]?.baseUrl,
        price: productDetail?.whitePrice?.price,
        quantity: quantity,
      })
    );
  };
console.log(productDetail)
  return (
    <div className="rounded overflow-hidden shadow-lg hover:shadow-xl grid md:flex">
      <div className="flex items-center justify-center ">
        <img
          className="md:w-[600px] w-[300px]  md:h-[600px] h-[300px] rounded-lg"
          src={img}
          alt="Property Image"
        />
      </div>
      <div className="flex flex-col align-center justify-between gap-4 my-5">
        <div className="px-6 py-4 flex-row-3">
          <div className="mb-2">
            <p className="text-md md:text-xl font-semi text-gray-900 mb-2">
              {productDetail?.description}
            </p>
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex items-center">
              <img src="../pictures/dress.webp" className="w-12" />
              <p className="ml-2 text-lg font-medium text-gray-700">
               {productDetail?.articlesList[0]?.genericDescription ? productDetail?.articlesList[0]?.genericDescription : "*"}
              </p>
            </div>
            <div className="flex items-center">
              <img src="../pictures/beden.png" className="w-12" />
              <p className="ml-2 text-lg font-medium text-gray-700 ">
                {productDetail?.fits[0]}
              </p>
            </div>
            <div className="flex items-center">
              <img src="../pictures/type.png" className="w-12" />
              <p className="ml-2 text-sm font-medium text-gray-700">
                {productDetail?.mainCategory?.name}
              </p>
            </div>
          </div>
        </div>
        <div className="px-6 py-4 flex justify-between items-center ">
          <div className="flex items-center gap-3">
            <img src="../pictures/country.png" className="w-12" />
            <div className="items-center">
              <p className="text-sm font-medium text-gray-800">
                {productDetail?.productCountryOfProduction ? productDetail?.productCountryOfProduction : "Global"}
              </p>
              <p className="text-xs text-gray-600 max-w-80 letter-wrap">
                {productDetail?.manufacturedBy}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <img src="../pictures/category.png" className="w-12" />
            <p className="ml-2 text-lg font-medium text-gray-700">
              {productDetail?.customerGroup}
            </p>
          </div>
          <div className="flex items-center ">
            <img src="../pictures/coton.png" className="w-12" />
            <p className="ml-2 text-sm font-medium text-gray-700">
              {productDetail?.articlesList[0]?.materialDetails[0].name ? productDetail?.articlesList[0]?.materialDetails[0].name : productDetail.keyFibreTypes[0]}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between px-6 mb-4">
          <div className="flex items-center mt-2 ">
            <div
              className="mr-2 rounded-full py-6 px-6 text-xs font-medium text-white"
              style={{ backgroundColor: productDetail?.color.rgbColor }}
            >
              {" "}
            </div>
            <p className="text-xl">{productDetail?.articlesList[0]?.colourDescription}</p>
          </div>
          <div className="flex items-center ">
            <img src="../pictures/year.png" className="w-12 rounded-full" />
            <p className="ml-2 text-xl font-medium text-gray-700">
              {productDetail?.yearOfProduction}
            </p>
          </div>
          <div className="flex items-center ">
            <img src="../pictures/marka.png" className="w-12 rounded-full" />
            <p className="ml-2 text-xl font-medium text-gray-700">
              {productDetail?.articlesList[0]?.brandName}
            </p>
          </div>

        </div>
        <div className="flex items-center justify-end px-6 mb-4">
  <div className="flex items-center justify-end gap-4 mt-5">
          <p className="text-2xl md-text-3xl font-extrabold text-blue-800">
              $ {(productDetail?.whitePrice.price * quantity).toFixed(2)}
            </p>
            <div onClick={decrement} className="bg-red-400 px-2 rounded-lg text-xl"> -</div>
            <input
              className="w-5 outline-none border-none text-black text-center text-2xl"
              type="text"
              value={quantity}
            />
            <div onClick={increment} className="bg-green-400 px-2 rounded-lg text-xl"> +</div>
            <button onClick={addBasket} className="bg-red-400 px-4 py-2 rounded-md hover:bg-red-600 hover:text-white">Sepete ekle</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBody;
