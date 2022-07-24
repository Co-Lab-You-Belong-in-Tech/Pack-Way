const express = require("express");
const router = express.Router();
const {
  getTrip,
  createTrip,
  updateTrip,
  deleteTrip,
} = require("../controllers/tripController");

router.route("/").get(getTrip).post(createTrip);

router.route("/:id").delete(deleteTrip).put(updateTrip);

module.exports = router;
