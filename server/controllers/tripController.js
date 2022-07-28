import Trip from "../models/tripModel.js";

// @desc Get Trip
// @route GET /api/trip
// @access Public (for now)
export const getTrip = async (req, res) => {
  const trip = await Trip.find();
  res.status(200).json(trip);
};

// @desc Create Trip
// @route POST /trip
// @access Public (for now)
export const createTrip = async (req, res) => {
  try {
    // if (!req.body.name) {
    //   res.status(400).json("Pease add trip info");
    // }
    // new trip
    const trip = await Trip.create({
      tripName: req.body.tripName,
      destination: req.body.destination,
      dates: req.body.dates,
      categories: req.body.categories,
    });

    res.status(200).json({ status: "success", data: trip });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
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
