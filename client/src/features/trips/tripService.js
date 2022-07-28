import axios from "axios";

const API_URL = "http://localhost:8000/trip/";

// get trip
const getTrip = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  if (response.data) {
    localStorage.setTrip("trip", JSON.stringify(response.data.data));
  }
  return response.data;
};

// create new trip
const createTrip = async (tripData) => {
  // const config = {
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   },
  // };
  const response = await axios.post(API_URL, tripData);
  if (response.data) {
    localStorage.setTrip("trip", JSON.stringify(response.data.data));
  }
  return response.data;
};

// update trip
const updateTrip = async (tripData) => {
  const { id } = tripData;

  const response = await axios.put(`${API_URL}/${id}`, tripData);

  if (response.data) {
    localStorage.setTrip("trip", JSON.stringify(response.data.data));
  }
  return response.data;
};

// delete trip
const deleteTrip = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  if (response.data) {
    localStorage.removeTrip("trip");
  }
  return response.data;
};

const tripService = {
  getTrip,
  createTrip,
  updateTrip,
  deleteTrip,
};

export default tripService;
