import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signupModal } from "../../data/modals/userModal";

const BASE_URL = "http://127.0.0.1:8000/"

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
  isLoading : false,
  orderedProducts: [],
};

export const login = createAsyncThunk(
  "Authentication",
  async ({userFormData}:{userFormData:any},{rejectWithValue}) => {
    try{
      const response = await fetch(`${BASE_URL}login`, {
        method: "POST",
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: userFormData,
      });

      if(!response.ok){
        const error = await response.json();
        return rejectWithValue(error);
        
      }
      const data = await response.json();
      return data;
      
    }catch(err){
      console.log("login error => ",err)
    }
  }
);

export const signup = createAsyncThunk(
  'signup',
  async ({userData} : {userData:signupModal},{rejectWithValue})=>{
    try{
      const response = await fetch(`${BASE_URL}register`,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if(!response.ok){
        const error = await response.json();
        return rejectWithValue(error);
      }

      const data = await response.json();
      return data;
    }
    catch(err){
      console.log("signup error => ",err);
    }
  }
)

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    checkLogin(state){
      const token = localStorage.getItem("AuthToken");
      if(token){
        state.isLoggedIn = true;
        return;
      }
      state.isLoggedIn = false;
    },
    logout(state) {
      state.isLoggedIn = false;
      localStorage.removeItem("AuthToken")
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
  extraReducers(builder){
    builder
    // login thunk
    .addCase(login.fulfilled,(state,action)=>{
      state.isLoading = false;
      state.isLoggedIn = true,
      localStorage.setItem("AuthToken" ,action.payload.access_token);
    })
    .addCase(login.rejected,(state,action)=>{
      state.isLoading = false;
      state.isLoggedIn = false,
      state.isLoading = false;
      console.log(action.error)
    })
    .addCase(login.pending,(state)=>{
      state.isLoading = true;
    })

    //signup thunk
    .addCase(signup.fulfilled,(state)=>{
      state.isLoading = false;
      state.isLoggedIn = false;
    })
    .addCase(signup.rejected,(state)=>{
      state.isLoggedIn = false;
      state.isLoading = false;
    })
    .addCase(signup.pending,(state)=>{
      state.isLoading = true;
    })
  }
});

export default userSlice;

export const {logout,checkLogin} = userSlice.actions;
