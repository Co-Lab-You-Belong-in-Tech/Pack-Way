import mongoose from "mongoose";

const tripSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    location: {
      type: String,
      required: [true, "Please enter a location"],
    },
    dates: {
      type: String,
      require: [true, "Please add trip dates"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Trip", tripSchema);
