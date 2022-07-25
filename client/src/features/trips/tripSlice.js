import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tripService from "./tripService";

const initialState = {
  trip: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// get a trip
export const getTrip = createAsyncThunk(
  "trip/getTrip",
  async (id, thunkAPI) => {}
);
