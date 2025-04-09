import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    cartTotal: 0,
}

const cartSlice = createSlice({ 
    name: "cart",
    initialState,
    reducers: {

    }
});

export default cartSlice;

export const cartActions = cartSlice.actions;