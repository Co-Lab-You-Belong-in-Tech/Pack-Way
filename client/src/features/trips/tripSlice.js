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
  async (id, thunkAPI) => {
    try {
      return await tripService.getTrip(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// create a new trip
export const createTrip = createAsyncThunk(
  "trip/createTrip",
  async (tripData, thunkAPI) => {
    try {
      return await tripService.createTrip(tripData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// update trip
export const updateTrip = createAsyncThunk(
  "trip/updateTrip",
  async (input, thunkAPI) => {
    try {
      return await tripService.updateTrip(input.id, input.tripData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// delete trip
export const deleteTrip = createAsyncThunk(
  "trip/deleteTrip",
  async (id, thunkAPI) => {
    try {
      return await tripService.deleteTrip(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      // -------------- Get Trip --------------
      .addCase(getTrip.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTrip.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.trip = action.payload.data;
      })
      .addCase(getTrip.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      })

      // -------------- Create Trip --------------
      .addCase(createTrip.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTrip.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.trip.push(action.payload.data);
      })
      .addCase(createTrip.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      })

      // -------------- Update Trip --------------
      .addCase(updateTrip.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTrip.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.trip = action.payload.trip;
      })
      .addCase(updateTrip.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      })

      // -------------- Delete Trip --------------
      .addCase(deleteTrip.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTrip.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.trip = action.payload.data;
      })
      .addCase(deleteTrip.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
        state.trip = null;
      });
  },
});

export const { reset } = tripSlice.actions;
export default tripSlice.reducer;
