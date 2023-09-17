import SliderComp from "../components/Home/SliderComp"
import Sorting from './../components/Home/Sorting';
import Category from './../components/Home/Category';
import Product from './../components/Home/Product';
import { useState } from "react";


const Home = () => {
const [sort, setSort] = useState("");
const [category, setCategory] = useState("");

  return (
    <div>
      <SliderComp />
      <Sorting setSort= {setSort} />
      <div className="flex">
        <Category setCategory={setCategory} />
        <Product category= {category} sort={sort} />
      </div>
    </div>
  )
}

export default Home
