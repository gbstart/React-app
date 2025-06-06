import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./countrySlice/countrySlice";
import authReducer from "./authSlice/authSlice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    auth: authReducer,
  },
});
