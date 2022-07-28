import Trip from "../models/tripModel.js";

export const createTrip = async (req, res) => {
  const { tripName, destination, dates, categories } = req.body;

  if (!tripName || !destination || !dates) {
    res.status(400);
    throw new Error("Please add all required fields");
  }

  // Create trip
  const trip = await Trip.create({
    tripName,
    destination,
    dates,
    categories,
  });

  if (trip) {
    res.status(201).json({
      _id: trip.id,
      tripName: trip.tripName,
      destination: trip.destination,
      dates: trip.dates,
      categories: trip.categories,
    });
  } else {
    res.status(400);
    throw new Error("Invalid trip data");
  }
};

// Get a trip by id
export const getTrip = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);
    if (!trip) {
      return res
        .status(404)
        .json({ status: "error", message: "Trip not found" });
    }

    return res.status(200).json({ status: "success", data: trip });
  } catch (error) {
    return res.status(400).json({ status: "error", message: error.message });
  }
};

// Update trip
export const updateTrip = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);
    if (!trip) {
      res.status(400).json({ status: "error", message: "Trip not found" });
    }

    const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedTrip);
  } catch (error) {
    return res.status(400).json({ status: "error", message: error.message });
  }
};
