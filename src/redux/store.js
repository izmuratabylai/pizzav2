import { configureStore } from "@reduxjs/toolkit";
import filterSliceReducer from "./filterSlice";

export const store = configureStore({
  reducer: {filterSliceReducer},
});

