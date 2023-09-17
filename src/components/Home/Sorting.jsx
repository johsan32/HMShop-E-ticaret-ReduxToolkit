import { useSelector } from "react-redux";

const Sorting = ({ setSort }) => {
  const { categories } = useSelector((store) => store.categories);
  return (
    <>
      <div className="bg-slate-700 my-5 p-1 flex items-center justify-between rounded-lg gap-3 md:justify-end px-2">
                <select
          className="px-3 bg-slate-600 outline-none text-1xl rounded-md py-1 md:hidden flex"
        >
           <option disabled value="">Categories</option>
          {categories?.map((category, i)=> (
            <option key={i} value="{category?.CatName}">{category?.CatName}</option>
          ))}
        </select>
        <select
          onChange={(e) => setSort(e.target.value)}
          name=""
          id=""
          className="px-3 bg-slate-600 outline-none text-1xl rounded-md py-1"
        >
          <option value="">Default sorting</option>
          <option value="inc">Sort by Price: low to high</option>
          <option value="dec">Sort by Price: high to low</option>
        </select>
      </div>
    </>
  );
};

export default Sorting;
