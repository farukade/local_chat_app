import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  toggleSideBar: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedInUser: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setLoggedInUser } = authSlice.actions;

// export the whole reducer
export default authSlice.reducer;
