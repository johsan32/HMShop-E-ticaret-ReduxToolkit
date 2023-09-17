import { createSlice } from '@reduxjs/toolkit'
import { getCategory } from './actions/categoryAction';

const initialState = {
  categories: [],
  isLoading: true,

}

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) =>{
builder
.addCase(getCategory.pending, (state) => {
    state.isLoading = false;
})
.addCase(getCategory.fulfilled, (state, action) => {
    state.isLoading = true;
    state.categories = action.payload;
})
  },
})


export default categorySlice.reducer