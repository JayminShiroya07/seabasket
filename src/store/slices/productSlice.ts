import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const BASE_URL = "http://127.0.0.1:8000/";

const initialState = {
  products: [],
  categories: [],
  selectedProduct: {},
  selectedImages: [],
  trendingProducts: [],
  categoryProduct: [],
  favoriteProducts: [],
  selectedCategory: 0,
  isloading: true,
  isError: false,
};

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async ({ categoryId }: { categoryId: number }, { rejectWithValue }) => {
    try {
      // Construct query params
      const query = categoryId ? `?category=${categoryId}` : "";
      const response = await fetch(`${BASE_URL}products/${query}`);

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error);
      }

      const data = await response.json();
      return data;
    } catch (err: any) {
      console.error("Fetch products error:", err);
      return rejectWithValue(err.message || "Unexpected error");
    }
  }
);

export const searchProducts = createAsyncThunk(
  "searchProducts",
  async (searchData: string , {rejectWithValue}) => {
    try {    
      const response = await fetch(`${BASE_URL}products/?${searchData}`,);

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error);
      }

      const data = await response.json();
      return data;

    } catch (err) {
      console.log(err)
    }
  }
);

export const fetchCategories = createAsyncThunk(
  "fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}categories?status=true`);

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

export const fetchCarousel = createAsyncThunk(
  "fetchCarouselProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}products/carousel/ ` + 5);

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

export const selectProduct = createAsyncThunk(
  "fetchSingleProduct",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}products/` + id);

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

export const fetchImages = createAsyncThunk(
  "fetchImages",
  async ({ product_id }: { product_id: number }, { rejectWithValue }) => {
    try {
      console.log("object");
      const response = await fetch(
        `${BASE_URL}product/product_images?product_id=${product_id}`
      );

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

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.selectedCategory = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isloading = true;
        state.isError = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isloading = false;
        state.isError = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isError = true;
        state.isloading = false;
      })

      //   singleProduct
      .addCase(selectProduct.pending, (state) => {
        state.isloading = true;
        state.isError = true;
      })
      .addCase(selectProduct.fulfilled, (state, action) => {
        state.isloading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(selectProduct.rejected, (state) => {
        state.isError = true;
        state.isloading = false;
      })

      // product images
      .addCase(fetchImages.pending, (state) => {
        state.isloading = true;
        state.isError = true;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.selectedImages = action.payload;
        state.isloading = false;
      })
      .addCase(fetchImages.rejected, (state) => {
        state.isloading = false;
        state.isError = true;
      })

      //carouesl
      .addCase(fetchCarousel.pending, (state) => {
        state.isloading = true;
        state.isError = true;
      })
      .addCase(fetchCarousel.fulfilled, (state, action) => {
        state.isloading = false;
        state.trendingProducts = action.payload.data;
      })
      .addCase(fetchCarousel.rejected, (state) => {
        state.isloading = false;
        state.isError = true;
      })

      //categories
      .addCase(fetchCategories.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isloading = false;
        state.isError = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.isloading = false;
        state.isError = true;
      })

      //product search
      .addCase(searchProducts.pending, (state)=>{
        state.isloading = true;
      })
      .addCase(searchProducts.fulfilled, (state,action)=>{
        state.isloading = true;
        console.log(state.isloading);
        state.products = action.payload;
      })
      .addCase(searchProducts.rejected, (state)=>{
        state.isloading = false;
        state.isError = true;
      })
  },
});

export default productSlice;

export const { setCategory } = productSlice.actions;
