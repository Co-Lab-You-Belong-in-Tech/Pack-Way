import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    first: { type: String },
    last: { type: String },
    password: { type: String, required: true },
    trips: [{ type: mongoose.Schema.Types.ObjectId, ref: "Trip" }],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
