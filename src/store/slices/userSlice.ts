import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  changePasswordModal,
  profileModal,
  signupModal,
} from "../../data/modals/userModal";
import { toast } from "react-toastify";
import { NavigateFunction } from "react-router-dom";

const BASE_URL = "http://127.0.0.1:8000/";

const initialState = {
  profile: {
    address: "",
  },
  orders: [],
  wishList: [],
  isLoggedIn: false,
  isLoading: false,
  orderedProducts: [],
};

export const login = createAsyncThunk(
  "Authentication",
  async ({ userFormData }: { userFormData: any }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: userFormData,
      });

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error);
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.log("login error => ", err);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "resetPassword",
  async ({ userFormData,navigate }: { userFormData: any ,navigate:NavigateFunction}, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${userFormData.token}`,
        },
        body: userFormData,
      });

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error);
      }
      const data = await response.json();
      navigate('/login');
      return data;
    } catch (err) {
      console.log("login error => ", err);
    }
  }
);

export const sendMail = createAsyncThunk(
  "reset-password/sendmail",
  async ({email,navigate}:{email:string,navigate:NavigateFunction}) => {
    const res = await fetch(`${BASE_URL}user/forgot_password?email=${email}`,{
      method: 'POST'
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.detail || "Something went wrong");
    }

    const data = await res.json();
    navigate('/login');
    return data;
  }
);

export const changePassword = createAsyncThunk(
  "changePassword",
  async (
    {
      changeData,
      token,
      navigate,
    }: {
      changeData: changePasswordModal;
      token: string;
      navigate: NavigateFunction;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(`${BASE_URL}user/change_password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(changeData),
      });

      if (!response.ok) {
        console.log("not ok");

        const error = await response.json();
        return rejectWithValue(error);
      }

      const data = await response.json();
      navigate("/login");
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const signup = createAsyncThunk(
  "signup",
  async ({ userData }: { userData: signupModal }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error);
      }

      const data = await response.json();
      return data;
    } catch (err) {
      console.log("signup error => ", err);
    }
  }
);

export const fetchProfile = createAsyncThunk(
  "fetchProfile",
  async ({ token }: { token: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}user/profiles`, {
        method: "GET",
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
      console.log("profile error => ", err);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "updateProfile",
  async (
    { profileData, token }: { profileData: profileModal; token: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(`${BASE_URL}user`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(profileData),
      });

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error);
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.log("update profile error => ", err);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    checkLogin(state) {
      const token = localStorage.getItem("AuthToken");
      if (token) {
        state.isLoggedIn = true;
        return;
      }
      state.isLoggedIn = false;
    },
    logout(state) {
      localStorage.removeItem("AuthToken");
      toast.info("User Logout Successfully..!",{
        position: "bottom-right"
      });
      return initialState;
    },
    updateAddress(state, action) {
      state.profile = { ...state.profile, address: action.payload };
    },
  },
  extraReducers(builder) {
    builder
      // login thunk
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.isLoggedIn = true),
          localStorage.setItem("AuthToken", action.payload.access_token);
        toast.success("user Login successfully..!");
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        (state.isLoggedIn = false), (state.isLoading = false);
        console.log(action.error);
        toast.error("Invalid Username and Password");
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })

      //signup thunk
      .addCase(signup.fulfilled, (state) => {
        state.isLoading = false;
        state.isLoggedIn = false;
      })
      .addCase(signup.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })

      //change password
      .addCase(changePassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        console.log("success");
        toast.success(action.payload.message);
        localStorage.removeItem("AuthToken");
      })
      .addCase(changePassword.rejected, (state) => {
        state.isLoading = false;
        toast.error("Password not changed pleased try again");
      })

      //profile
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.profile = { ...state.profile, ...action.payload };
        console.log(state.profile);
      })

      //update profile
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = { ...state.profile, ...action.payload };
        toast.success("profile updated");
        console.log(state.profile);
      })
      .addCase(updateProfile.rejected, (state) => {
        state.isLoading = false;
      })

      //reset password
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        toast.success(action.payload.message);
      })
      .addCase(resetPassword.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        toast.error("Somthing were wrong please try again leter..!");
      })

      //send mail
      .addCase(sendMail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendMail.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        toast.success(action.payload.message)
        console.log(action.payload.message)
      })
      .addCase(sendMail.rejected, (state) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        toast.error("Somthing were wrong please try again leter..!");
      });
  },
});

export default userSlice;

export const { logout, checkLogin, updateAddress } = userSlice.actions;
