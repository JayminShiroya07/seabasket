import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const BASE_URL = "http://127.0.0.1:8000/cart";

const initialState = {
  cart_data: {
    cart_item: [],
    total_amount: 0,
  },
  isCartPending: false,
  isCartError: false,
  isQuantityChanged : false
};

//add to cart pending
export const onCartEdit = createAsyncThunk(
  "cart/addToCart",
  async (
    { id, method, token }: { id: number, method:string, token: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(`${BASE_URL}/` + id, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error);
      }

      const data = await response.json();
      return data;
    } catch (err) {
      console.log("cart error => ", err);
    }
    console.log(token);
  }
);

//cart fetch done
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (token: string, { rejectWithValue }) => {
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
      console.log("cart error => ", err);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState :initialState,
  reducers: {
    emptyCart(){
      console.log("cart empty")
      return initialState;
    },
  },
  extraReducers(builder) {
    builder
      //fetch cart
      .addCase(fetchCart.pending, (state) => {
        state.isCartPending = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.isCartPending = false;
        state.isCartError = false;
        state.cart_data.cart_item = action.payload.data.cart_items;
        state.cart_data.total_amount = action.payload.data.total_amount;
      })
      .addCase(fetchCart.rejected, (state) => {
        state.isCartError = true;
      })

      //add to cart
      .addCase(onCartEdit.pending, (state) => {
        state.isQuantityChanged = true;
      })
      .addCase(onCartEdit.fulfilled, (state, action) => {
        state.isQuantityChanged = false;
        state.isCartError = false;
        
        toast.success(action.payload.message);
      })
      .addCase(onCartEdit.rejected, (state,action) => {
        console.log(action)
        state.isCartError = true;
      });
  },
});

export default cartSlice;

export const {emptyCart} = cartSlice.actions;
