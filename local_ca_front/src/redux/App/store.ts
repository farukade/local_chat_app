import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Features/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

// this creates a type for root reducer
export type RootStore = ReturnType<typeof store.getState>;
