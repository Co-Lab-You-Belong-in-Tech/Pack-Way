const asyncHandler = require("express-async-handler");

const Trip = require("../models/tripModel");

// @desc Get Trip
// @route GET /api/trip
// @access Public (for now)
const getTrip = asyncHandler(async (req, res) => {
  const trip = await Trip.find();
  res.status(200).json(trip);
});

// @desc Create Trip
// @route POST /api/trip
// @access Public (for now)
const createTrip = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400).json();
    throw new Error("Please add a text field");
  }

  const trip = await Trip.create({
    text: req.body.text,
    // location: req.body.location,
    // dates: req.body.dates,
  });

  res.status(200).json(trip);
});

// @desc Update Trip
// @route PUT /api/trip/:id
// @access Public (for now)
const updateTrip = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update trip ${req.params.id}` });
});

// @desc Delete Trip
// @route DELETE /api/trip/:id
// @access Public (for now)
const deleteTrip = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete trip ${req.params.id}` });
});

module.exports = {
  getTrip,
  createTrip,
  updateTrip,
  deleteTrip,
};
