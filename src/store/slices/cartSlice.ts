import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = "http://127.0.0.1:8000/cart";

const initialState = {
  cart_data: {
    cart_item : [],
    total_amount : 0
  },
  isCartPending : false,
  isCartError : false
};

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ id, token }: { id: number; token: string }, { rejectWithValue }) => {
    console.log(id);
    console.log(token);
  }
);

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (token:string, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const error = await response.json();
        // return error
        return rejectWithValue(error);
      }

      const data = await response.json();
      return data;
    } catch (err) {
      console.log("login error => ", err);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
        //fetch cart
        .addCase(fetchCart.pending,(state,)=>{
            state.isCartPending = true;
        })
        .addCase(fetchCart.fulfilled,(state,action)=>{
            state.isCartPending = false;
            state.isCartError = false;
            state.cart_data.cart_item = action.payload.data.cart_items;
            state.cart_data.total_amount = action.payload.data.total_amount;
            // state.
        })
        .addCase(fetchCart.rejected,(state,)=>{
            state.isCartError = true;
        })
  }
});

export default cartSlice;

export const cartActions = cartSlice.actions;
