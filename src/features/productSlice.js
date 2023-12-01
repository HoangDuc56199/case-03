import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { findProduct, findProducts, deleteProduct, createProduct, updateProduct } from '../api/productAPI';


const initState = {
    values:null,
    value:null
}

export const getProducts = createAsyncThunk("product/list", async () => {
  const response = await findProducts();
  return response.data;
});



// export productSlide = createSlice({

//     name: "product",
//     initialState,
//     reducer: {

//     }
// },
//     )
