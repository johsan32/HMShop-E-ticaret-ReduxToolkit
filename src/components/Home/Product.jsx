import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  getCategoryProducts,
} from "./../../redux/actions/productAction";
import ProductCard from "./ProductCard";
import Loading from "./../Loading";
import ReactPaginate from "react-paginate";

const Product = ({ category, sort }) => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.products);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category));
    } else {
      dispatch(getProducts());
    }
  }, [category]);

  const itemsPerPage = 12;
  const startOffset = itemOffset * itemsPerPage;
  const endOffset = startOffset + itemsPerPage;
  const sortedItems = state.products.slice().sort((a, b) => {
    if (sort === "inc") {
      return a.price.value - b.price.value;
    } else if (sort === "dec") {
      return b.price.value - a.price.value;
    }
    return 0;
  });
  const currentItems = sortedItems.slice(startOffset, endOffset);
  const pageCount = Math.ceil(sortedItems.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = event.selected;
    setItemOffset(newOffset);
  };

  return (
<div className="w-full m:w-5/6">
  {state.isLoading && (
    <div className="loading-container">
      <Loading />
    </div>
  )}
  {!state.isLoading && (
    <>
      <div className=" grid mb-8 rounded-lg shadow-sm dark:border-gray-700 md:mb-6 md:grid-cols-4 grid-cols-2 gap-3">
        {currentItems?.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
      <ReactPaginate
        className="paginate"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  )}
</div>
  );
};

export default Product;
