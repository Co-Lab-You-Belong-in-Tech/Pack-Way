import express from "express";

import {
  createTrip,
  getTrip,
  updateTrip,
} from "../controllers/tripController.js";

const router = express.Router();

router.post("/", createTrip);
router.get("/:id", getTrip);
router.put("/:id", updateTrip);

export default router;
