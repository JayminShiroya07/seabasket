import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import { useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer : {
    user: userSlice.reducer,
    cart: cartSlice.reducer,
    product: productSlice.reducer,
  },
});

export const useAppDispatch = useDispatch.withTypes<(typeof store)["dispatch"]>();

export const useAppSelector = useSelector.withTypes<(typeof store)["getState"]>();

export default store;