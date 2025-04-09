import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {
    userId: 0,
    name: "",
    profilePic: "",
    phoneNumber: "",
    email: "",
    address: "",
  },
  orders: [],
  wishList: [],
  isLoggedIn: false,
  orderedProducts: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
      const emptyProfile = {
        userId: 0,
        name: "",
        profilePic: "",
        phoneNumber: "",
        email: "",
        address: "",
      };
      state.profile = emptyProfile;
    },
  },
});

export default userSlice;

export const userAction = userSlice.actions;
