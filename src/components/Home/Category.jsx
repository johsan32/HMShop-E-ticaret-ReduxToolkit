import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../redux/actions/categoryAction";

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((store) => store.categories);
  const [selectedCategory, setSelectedCategory] = useState(null); 

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.tagCodes);
    setCategory(category.tagCodes);
  };

  return (
    <div className="w-1/6 p-2 me-3 bg-slate-700 pb-1 pl-5 h-[400px] rounded-lg md:block hidden " >
      <div className="text-xl w-full border-b mb-3">Categories</div>
      {categories?.map((category, i) => (
        <div
          onClick={() => handleCategoryClick(category)}
          className={`cursor-pointer hover:bg-slate-400 px-2 rounded-md mb-2 ${
            selectedCategory === category.tagCodes ? "bg-blue-500" : ""
          }`}
          key={i}
        >
          {category.CatName}
        </div>
      ))}
    </div>
  );
};

export default Category;

