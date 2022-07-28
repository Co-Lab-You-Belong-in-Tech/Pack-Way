import express from "express";

import {
  getTrip,
  createTrip,
  updateTrip,
  deleteTrip,
} from "../controllers/tripController.js";

const router = express.Router();

router.post("/", createTrip);
router.get("/:id", getTrip);
router.put("/:id", updateTrip);
router.delete("/:id", deleteTrip);

export default router;
