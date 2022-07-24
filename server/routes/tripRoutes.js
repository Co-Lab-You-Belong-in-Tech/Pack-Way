import express from "express";
const router = express.Router();

import {
  getTrip,
  createTrip,
  updateTrip,
  deleteTrip,
} from "../controllers/tripController.js";

router.route("/").get(getTrip).post(createTrip);

router.route("/:id").delete(deleteTrip).put(updateTrip);

export default router;
