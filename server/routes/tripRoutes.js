import express from "express";
const router = express.Router();

import {
  getTrip,
  createTrip,
  updateTrip,
  deleteTrip,
} from "../controllers/tripController.js";

router.route("/").post(createTrip);

router.route("/:id").delete(deleteTrip).put(updateTrip).get(getTrip);

export default router;
