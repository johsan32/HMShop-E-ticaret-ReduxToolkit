import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options2, categoryOpt2 } from "../../utils/Constants";

export const getProducts = createAsyncThunk("products", async () => {
  const res = await axios.request(options2);
  //console.log(res.data);
  return res.data.results;
 
});
export const getCategoryProducts = createAsyncThunk("getProduct", async (category) => {
  const res = await axios.get(`https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=${category}&country=us&lang=en&currentpage=1&pagesize=50`, categoryOpt2);
 // console.log("dd", res.data);
  return res.data.results;
});

export const getProductDetail = createAsyncThunk("product", async (id) => {
  const res = await axios.get(`https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail?lang=en&country=us&productcode=${id}`, categoryOpt2);
  return res.data.product;
 
});
