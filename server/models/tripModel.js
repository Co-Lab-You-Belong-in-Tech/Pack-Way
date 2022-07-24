const mongoose = require("mongoose");

const tripSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a name"],
    },
    // location: {
    //   type: String,
    //   required: [true, "Please enter a location"],
    // },
    // dates: {
    //   type: String,
    //   require: [true, "Please add trip dates"],
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Trip", tripSchema);
