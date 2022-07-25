import { configureStore } from "@reduxjs/toolkit";
import tripReducer from "../features/trips/tripSlice";

export const store = configureStore({
  reducer: {
    trip: tripReducer,
  },
});
