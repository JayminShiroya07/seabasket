import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  persistStore,
  persistReducer
} from "redux-persist";
import storage from "redux-persist/lib/storage"; 

const rootReducer = combineReducers({
  user: userSlice.reducer,
  cart: cartSlice.reducer,
  product: productSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "cart"], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
 
});

export const persistor = persistStore(store);

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<typeof store.getState>();

export default store;
