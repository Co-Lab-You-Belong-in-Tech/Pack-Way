import mongoose from "mongoose";

const tripSchema = new mongoose.Schema(
  {
    tripName: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    dates: {
      type: String,
      required: true,
    },
    categories: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Trip", tripSchema);
