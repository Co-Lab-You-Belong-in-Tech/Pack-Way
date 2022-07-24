import Trip from "../models/tripModel.js";

// @desc Get Trip
// @route GET /api/trip
// @access Public (for now)
export const getTrip = async (req, res) => {
  const trip = await Trip.find();
  res.status(200).json(trip);
};

// @desc Create Trip
// @route POST /api/trip
// @access Public (for now)
export const createTrip = async (req, res) => {
  if (!req.body.text) {
    res.status(400).json();
    throw new Error("Please add a text field");
  }

  const trip = await Trip.create({
    name: req.body.name,
    // location: req.body.location,
    // dates: req.body.dates,
  });

  res.status(200).json(trip);
};

// @desc Update Trip
// @route PUT /api/trip/:id
// @access Public (for now)
export const updateTrip = async (req, res) => {
  res.status(200).json({ message: `Update trip ${req.params.id}` });
};

// @desc Delete Trip
// @route DELETE /api/trip/:id
// @access Public (for now)
export const deleteTrip = async (req, res) => {
  res.status(200).json({ message: `Delete trip ${req.params.id}` });
};
