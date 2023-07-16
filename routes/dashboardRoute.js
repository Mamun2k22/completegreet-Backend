const express = require("express");
const router = express.Router();
const { getSubscriberOverview } = require("../controllers/dashboardController");

router.get("/api/v1/get-subscriber-overview/:id", getSubscriberOverview);

module.exports = router;
