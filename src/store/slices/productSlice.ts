import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../data/products";

const initialState = {
    products:<Product[]>[],
    categories:[],
    trendingProducts:<Product[]>[],
    categoryProduct:<Product[]>[],
    favoriteProducts: <Product[]>[]
}

const productSlice = createSlice({
    name : 'products',
    initialState,
    reducers : {
        addToFevorite(state,action){
            const product = state.products.find(product => product.id === action.payload);
            if (product && !state.favoriteProducts.some(favProduct => favProduct.id === product.id)) {
                state.favoriteProducts.push(product);
            }
        },
        removeFromFevorite(state,action){
            const filteredProducts = state.favoriteProducts.filter((product) => product.id !== action.payload)
            state.favoriteProducts = filteredProducts;
        }
    }
});

export default productSlice;

export const productAction = productSlice.actions;