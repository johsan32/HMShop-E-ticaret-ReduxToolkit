import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../../utils/Constants";
import axios from "axios";

export const getCategory = createAsyncThunk ("category", async () => {
    const res = await axios.request(options);
    //console.log(res);
    return res.data;
})